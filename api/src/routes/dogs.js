const {Op} = require('sequelize')
const { Router } = require('express');
const dogsRouter = Router();
const axios=require("axios")
const { Dog, Temperamento } = require('../db');
const {getTemperamentos} = require('../utils/getTemperamentos');
const {deletePropiedadesRazas,deletePropiedadesRazasDetail} = require('../utils/deletePropiedadesRazas');
const {addPromedioWei} =require('../utils/addPromedioWei')
require("dotenv").config();

dogsRouter.get("/", async(req,res, next)=>{
    if(req.query.name===undefined || req.query.name===""){
        try {
            await axios.get(`${process.env.URL_API}?${process.env.API_KEY}`)
                .then(rtaRazasApi => rtaRazasApi.data)
                    .then(async(rtaRazasApi)=>{
                        var razasDogsDb=await Dog.findAll({
                            atributtes:["id","name","temperament","weight","image"]
                        })
                        if(razasDogsDb[0]){
                            razasDogsDb.map((razaBd)=>{
                                rtaRazasApi.push(razaBd)
                            })
                        }
                        addPromedioWei(rtaRazasApi)
                        return deletePropiedadesRazas(rtaRazasApi);
                    })
                    .then(async(rtaRazasApiBd)=>{
                        await rtaRazasApiBd.sort( (a,b) => a.name.localeCompare( b.name ) );
                        var TemperamentosDb=await getTemperamentos(Temperamento);
                        var arrayTemps=[];
                        if(TemperamentosDb.length<1){
                            rtaRazasApiBd.map((raza)=>{
                                TemperamentosDb+=raza.temperament+",";
                            })
                            var splitTemps=TemperamentosDb.split(",")
                            for (let i = 0; i < splitTemps.length; i++) {
                                arrayTemps.push(splitTemps[i].trim()) 
                            }    
                            arrayTemps.sort();
                        }
                        var arraySetTemps=new Set(arrayTemps)
                        arraySetTemps.delete('undefined')
                        if(arraySetTemps && arraySetTemps.size>1){
                            arraySetTemps.forEach(async(tem) => {
                                if(tem!==""){
                                    var nameTemperamento={name: tem}
                                    await Temperamento.create(nameTemperamento)
                                }
                            });
                        }
                        res.status(200).send(rtaRazasApiBd)
                    })    
        } catch (error) {
            res.status(404).send(error.message)
        }
    }else{next()}
})

dogsRouter.get("/", async(req,res)=>{
    const {name}=req.query;
    try {
        if(name.length>2){
            var razasDogsDb=await Dog.findAll({
                atributtes:["id","name","temperament","weight","image"]
            });
            if(razasDogsDb[0]){
                razasDogsDb=razasDogsDb.filter((raza)=>{
                    if(raza.name.includes(name)){
                        return raza
                    }
                })
            }
            var razasDogsApi;
            await axios.get(`${process.env.URL_API}/search?q=${name}&${process.env.API_KEY}`)
                .then(rtaRazasApi => rtaRazasApi.data)
                .then(async(rtaRazasApi)=>{
                    if(rtaRazasApi[0]){
                        for (let i = 0; i < rtaRazasApi.length; i++) {
                            if(!rtaRazasApi[i].reference_image_id){
                                rtaRazasApi[i].reference_image_id="BJa4kxc4X"
                            }
                            var refImgId=rtaRazasApi[i].reference_image_id;
                            await axios.get(`https://api.thedogapi.com/v1/images/${refImgId}?${process.env.API_KEY}`)
                                .then(rtaImg=> rtaImg.data)
                                .then(rtaImg=>{
                                    rtaRazasApi[i].image={
                                        id:"",      
                                        width:"",      
                                        height:"",  
                                        url:rtaImg.url
                                    }
                                })   
                        }
                    }
                    razasDogsApi=rtaRazasApi;
                })
            var razasDogsApiDb=deletePropiedadesRazas(razasDogsDb.concat(razasDogsApi))
            if(razasDogsApiDb[0]){
                addPromedioWei(razasDogsApiDb)
                return res.send(razasDogsApiDb)
            }else{
                throw new TypeError("No se encontró la raza de perro en la base de datos")
            }
        }else{
            throw new TypeError("El nombre de la raza a buscar debe contener mas de 2 caracteres")
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

dogsRouter.get("/:idRaza", async(req,res)=>{
    const {idRaza}=req.params;
    try {
        if(idRaza.length>2){
            var razaDetailApi;
            await axios.get(`${process.env.URL_API}/search?q=${idRaza}&${process.env.API_KEY}`)
                .then(rtaRazaApi => rtaRazaApi.data)
                .then(async (rtaRazaApi)=> {
                    if(rtaRazaApi[0]){ 
                        let refImgId=rtaRazaApi[0].reference_image_id;
                        await axios.get(`https://api.thedogapi.com/v1/images/${refImgId}?${process.env.API_KEY}`)
                            .then(rtaImg=> rtaImg.data)
                            .then(rtaImgFinal=>{
                                rtaRazaApi[0].image={url:rtaImgFinal.url};
                        })
                    }
                    razaDetailApi=rtaRazaApi;
            })

            var razasDogsDb=await Dog.findAll({
                atributtes:["id","name","temperament","height","weight","image","life_span"]
            });
            if(razasDogsDb[0]){
                razasDogsDb=razasDogsDb.filter((raza)=>{
                    if(raza.name.includes(idRaza)){
                        return raza
                    }
                })
            }

            var razaDetailApiDb=deletePropiedadesRazasDetail(razasDogsDb.concat(razaDetailApi));
            if(razaDetailApiDb[0]){
                return res.status(200).send(razaDetailApiDb)
            }else{
                throw new TypeError("Raza de perro no encontrada en base de datos")
            }
        }else{
            throw new TypeError("El nombre de la raza a buscar debe contener mas de 2 caracteres")
        }
    } catch (error) {
        return res.status(404).send(error.message)
    }
})

dogsRouter.post("/", async(req,res)=>{
    const {name,height,weight,temperament}=req.body;
    var arrayTemps=temperament.split(",");
    if(arrayTemps[0]){
        arrayTemps=arrayTemps.map((nameTemp)=>{
            return nameTemp.trim()
        })
        arrayTemps.pop();
    }
    try {
        if(name && height && weight){
            var arrayIdTemps=await Temperamento.findAll({
                where: {
                    name:{[Op.or]: arrayTemps},
                },
                attributes:{exclude: ["name"]},
            })
            const newRaza=await Dog.create(req.body)
            await newRaza.setTemperamentos(arrayIdTemps)
            res.send(newRaza)
        }else{
            throw new TypeError("Algunos campos son requeridos")
        }    
    } catch (error) {
        return res.status(404).send(error.message)
    }
})
module.exports=dogsRouter