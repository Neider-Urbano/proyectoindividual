const { Router } = require('express');
const temperamentsRouter = Router();
const { Temperamento } = require('../db');
const {getTemperamentos} = require('../utils/getTemperamentos');

temperamentsRouter.get("/", (req,res)=>{
    var promiseDogs=promisiTemperament();
    promiseDogs.then((resultado)=>{
        if(resultado[0]){
            return res.status(200).send(resultado)
        }else{
            throw new TypeError("la tabla de Temperamentos esta vacia")
        }
    }).catch((error)=>{
        return res.status(404).send(error.message)
    })
})
module.exports=temperamentsRouter

function promisiTemperament() {
    return new Promise(function(resolve, reject){
        const TemperamentosDb=getTemperamentos(Temperamento)
        resolve(TemperamentosDb);
    });
};