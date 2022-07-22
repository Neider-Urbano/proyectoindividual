const functionFiltrarRazas=(valueSelect, valueFiltro,razas,setRazasRedux, setOperacionAxios)=>{
  if(valueFiltro==="filtrarTemperamentos"){
    var existeDogsTemp=razas.filter((raza)=>{
      if(raza.temperament){
        var b=raza.temperament.split(",")
        for (let i = 0; i < b.length; i++) {
          if(b[i].trim().includes(valueSelect)) return raza;           
        }
      }
    })
    if(existeDogsTemp[0]){
      setRazasRedux(existeDogsTemp)
    }
  }else if(valueFiltro==="filtrarRazas"){
    var existeDogsRaza=razas.filter((r)=>{
      if(r.name===valueSelect) return r
    })
    if(existeDogsRaza[0]){
      setRazasRedux(existeDogsRaza)
    }
  }else if(valueFiltro==="Ninguno"){
    setRazasRedux(razas)
  }
  setOperacionAxios(valueFiltro!=="Ninguno" ? "filtrarRazas":"filtrarRazasNinguno")
}

module.exports = {functionFiltrarRazas}