/* RUTAS DE SERVICIOS */
const axios = require('axios').default;
const url= 'http://localhost:2000'


const getOperacionRazas =  async() => {
  return await axios.get(url+"/dogs")
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    var errorEnviar="";
    if(error.response.data){errorEnviar=error.response.data}
    else{errorEnviar=error.message}
    throw new TypeError(errorEnviar)
  });
}

const getOperacionRazasName= async(nameRaza) => {
    return await axios.get(url+"/dogs?name="+nameRaza)
    .then((response)=>{
      return response.data
    }).catch (error=> {
      var errorEnviar="";
      if(error.response.data){errorEnviar=error.response.data}
      else{errorEnviar=error.message}
      throw new TypeError(errorEnviar)
    })
}

const getOperacionRaza=async(idRaza)=>{
  return await axios.get(url+"/dogs/"+idRaza)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    var errorEnviar="";
    if(error.response.data){errorEnviar=error.response.data}
    else{errorEnviar=error.message}
    throw new TypeError(errorEnviar)
  });
}

const getOperacionTemperamentos=async()=>{
  return await axios.get(url+"/temperaments")
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    var errorEnviar="";
    if(error.response.data){errorEnviar=error.response.data}
    else{errorEnviar=error.message}
    throw new TypeError(errorEnviar)
  });
}

const postOperacionRaza=async(objetoNewRaza)=>{
  return await axios.post(url+"/dogs",objetoNewRaza)
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    var errorEnviar="";
    if(error.response.data){errorEnviar=error.response.data}
    else{errorEnviar=error.message}
    throw new TypeError(errorEnviar)
  });
}
const getOperacionRazasCreators=async()=>{ 
  return await axios.get(url+"/dogs/creators")
  .then(function (response) {
    return response.data
  })
  .catch(function (error) {
    var errorEnviar="";
    if(error.response.data){errorEnviar=error.response.data}
    else{errorEnviar=error.message}
    throw new TypeError(errorEnviar)
  });
}
module.exports= {
    getOperacionRazas,
    getOperacionRaza,
    getOperacionRazasName,
    getOperacionTemperamentos,
    postOperacionRaza,
    getOperacionRazasCreators
}
