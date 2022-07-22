//bubble sort
const functionBubleSortRazas=(razasRedux,opcion)=>{
  if(razasRedux.length>0){
    var numeroOption=null;
    var ordernarRazasAZ=recorrerArrayRaza(razasRedux,1);
    if(opcion==="ordenAZ"){numeroOption=1}
    if(opcion==="ordenZA"){numeroOption=2}
    if(opcion==="ordenPesoMaxMinMetric"){numeroOption=3}
    if(opcion==="ordenPesoMinMaxMetric"){numeroOption=4}
    if(opcion==="ordenPesoMaxMinImperial"){numeroOption=5}
    if(opcion==="ordenPesoMinMaxImperial"){numeroOption=6}
    var ordenarRazas=recorrerArrayRaza(ordernarRazasAZ, numeroOption);
    return ordenarRazas;
  }
}

function recorrerArrayRaza(razasRedux, option){
  var ordenarRazas=razasRedux;
  var propiedad;
  for (var i = 0; i < razasRedux.length; i++) {
    for (var j = 0; j < razasRedux.length-1-i; j++) {
      var encontrado=false;
      if(option===1 || option===2){ propiedad="name"}
      if(option===3 || option===4){ propiedad="promedioWeiMetric"}
      if(option===5 || option===6){ propiedad="promedioWeiImperial"}
      if(option===1 || option===4 || option===6){
        if ((razasRedux[j][propiedad] > razasRedux[j+1][propiedad])&& option===1) {
          var aux=razasRedux[j]
          encontrado=true;
        }if ((parseFloat(razasRedux[j][propiedad]) > parseFloat(razasRedux[j+1][propiedad])) && (option===4 || option===6)) {
          var aux=razasRedux[j]
          encontrado=true;
        }
        if(encontrado){
          ordenarRazas[j] = razasRedux[j+1]
          ordenarRazas[j + 1] = aux;
        }
      }else if(option===2 || option===3 || option===5){
        if (razasRedux[j][propiedad] < razasRedux[j+1][propiedad] && option===2) {
          var aux=razasRedux[j]
          encontrado=true;
        }else if ((parseFloat(razasRedux[j][propiedad]) < parseFloat(razasRedux[j+1][propiedad])) && (option===3 || option===5)) {
          var aux=razasRedux[j]
          encontrado=true;
        }
        if(encontrado){
          ordenarRazas[j] = razasRedux[j+1]
          ordenarRazas[j + 1] = aux;
        }
      } 
    }
  }
  return ordenarRazas;
}
module.exports = {
  functionBubleSortRazas
}