
const deletePropiedadesRazas=(rtaRazasApi)=>{
    rtaRazasApi.map((rta)=>{
        delete rta.bred_for;
        delete rta.breed_group;
        delete rta.origin;
        delete rta.breed_group;
        delete rta.height;
        delete rta.life_span;
        delete rta.country_code;
        delete rta.description;
        delete rta.history;
        delete rta.image.id;      
        delete rta.image.width;      
        delete rta.image.height;      
    })
    return rtaRazasApi;
}

const deletePropiedadesRazasDetail=(rtaRazasApi)=>{
    rtaRazasApi.map((rta)=>{
        delete rta.bred_for;
        delete rta.breed_group;
        delete rta.origin;
        delete rta.breed_group;
        delete rta.country_code;
        delete rta.description;
        delete rta.history;     
    })
    return rtaRazasApi;
}

module.exports={deletePropiedadesRazas, deletePropiedadesRazasDetail}