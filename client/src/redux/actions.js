const utils =require("../utils/utils")

function getRazas(){
    return function(dispatch){
        utils.getOperacionRazas()
        .then(rtaRazas=>{
            return dispatch({
                type: "GET_RAZAS",
                payload: rtaRazas,
                paginaPeticion: "paginaDogs"
            })
        })
        .catch(error=>{
            return dispatch({
                type: "ADD_ERROR",
                payload: [{
                    error: error.message,
                    paginaPeticion: "paginaDogs"
                    }
                ]
            })
        }) 
    }
}

function getRaza(idRaza){
    return function(dispatch){
        utils.getOperacionRaza(idRaza)
        .then(respuestaRaza=>{
            return dispatch({
                type: "GET_RAZA",
                payload: respuestaRaza,
                paginaPeticion: "paginaIdDogs"
            })
        })
        .catch(function (error) {
            return dispatch({
                type: "ADD_ERROR",
                payload: [{
                    error: error.message,
                    paginaPeticion: "paginaIdDogs"
                }]
            })
        });
    }
}

function getRazasName(nameRaza){
        return function(dispatch){
            utils.getOperacionRazasName(nameRaza)
            .then((rtaRazasName)=>{ 
                return dispatch({
                    type: "GET_RAZAS",
                    payload: rtaRazasName,
                    paginaPeticion: "paginaDogs"
                })
            }).catch(error=>{
                return dispatch({
                    type: "ADD_ERROR",
                    payload: [{
                        error: error.message,
                        paginaPeticion: "paginaDogs"
                    }]
                })
            }) 
        } 
}

function getTemperamentos(){
    return function(dispatch){
        utils.getOperacionTemperamentos()
        .then(rtaTemps=>{
            return dispatch({
                type: "GET_TEMPERAMENTOS",
                payload: rtaTemps,
                paginaPeticion: "paginaTemperamentos"
            })
        })
        .catch(error=>{
            return dispatch({
                type: "ADD_ERROR",
                payload: [{
                    error: error.message,
                    paginaPeticion: "paginaTemperamentos"
                }]
            })
        }) 
    }
}

function postRaza(objetoNewRaza){
    return function(dispatch){
        utils.postOperacionRaza(objetoNewRaza)
        .then(rtaObjetoRaza=>{
            return dispatch({
                type: "POST_RAZA",
                payload: rtaObjetoRaza,
                paginaPeticion: "paginaCrearRaza"
            })
        })
        .catch(error=>{
            return dispatch({
                type: "ADD_ERROR",
                payload: [{
                    error: error.message,
                    paginaPeticion: "paginaCrearRaza"
                }]
            })
        }) 
    }
}

function getRazasCreators(){
    return function(dispatch){
        utils.getOperacionRazasCreators()
        .then(rtaRazas=>{
            return dispatch({
                type: "GET_RAZAS",
                payload: rtaRazas,
                paginaPeticion: "paginaDogsCreators"
            })
        })
        .catch(error=>{
            return dispatch({
                type: "ADD_ERROR",
                payload: [{
                    error: error.message,
                    paginaPeticion: "paginaDogsCreators"
                    }
                ]
            })
        }) 
    }
}
module.exports={
    getRazas:getRazas,
    getRaza:getRaza,
    getRazasName:getRazasName,
    getTemperamentos: getTemperamentos,
    postRaza: postRaza,
    getRazasCreators:getRazasCreators
}
