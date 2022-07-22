const functionCreadoraObjetoRaza=(datosRaza, temperaments, urlImg)=>{
    var life_span_Rango=datosRaza.life_spanMin;
    if(datosRaza.life_spanMax!==""){
        life_span_Rango+=" - "+datosRaza.life_spanMax;
    }
    datosRaza.name=datosRaza.name.charAt(0).toUpperCase() + datosRaza.name.slice(1);
    const objetoNewRaza={
        name: datosRaza.name,
        weight: {        
            imperial: `${datosRaza.weightImperialMin} - ${datosRaza.weightImperialMax}`,
            metric: `${datosRaza.weightMetricMin} - ${datosRaza.weightMetricMax}`
        }, 
        height: {
            imperial: `${datosRaza.heightImperialMin} - ${datosRaza.heightImperialMax}`,
            metric: `${datosRaza.heightMetricMin} - ${datosRaza.heightMetricMax}`,
        },
        life_span: datosRaza.life_spanMin==="" && datosRaza.life_spanMax==="" ? "" :
                   `${life_span_Rango} years`,
        temperament: temperaments,
        image:{
            url: urlImg!=="" ? urlImg : "https://img.freepik.com/foto-gratis/perro-beagle-sobre-fondo-gris_155003-9714.jpg?w=740&t=st=1658378834~exp=1658379434~hmac=dfb95564867fcb43251159391d1f1a2f51c0993f206c80f54a68690d835ba2bc"
        }
    }
    return objetoNewRaza;
}

module.exports = {functionCreadoraObjetoRaza}