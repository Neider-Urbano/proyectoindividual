const validarCamposCrearRaza=(input,value, datosRaza)=>{
    var errors={};
    if(input!=="life_spanMax"){
        if(value===""){      
            errors[input]=`${input} es requerido`;
        }else{
            if(input==="name" && value.length>40){
              errors[input]=`${input} demasiado largo`;
            }else{
              var value=parseFloat(value)
              if(input==="heightImperialMin" || input==="heightMetricMin"){
                if(value>499){
                  errors[input]=`${input} demasiado alto`;
                }
              }else if(input==="heightImperialMax" || input==="heightMetricMax"){
                if(value>500){  
                  errors[input]=`${input} demasiado alto`;
                }
                else if((input==="heightImperialMax" && 
                    (value<datosRaza.heightImperialMin && datosRaza.heightImperialMin!=="")) 
                    ||
                    (input==="heightMetricMax" && 
                    (value<datosRaza.heightMetricMin && datosRaza.heightMetricMin!==""))
                ){
                  errors[input]=`Rango invalido en ${input}`;
                }
              }else if(input==="weightImperialMin" || input==="weightMetricMin"){
                if(value>199){
                  errors[input]=`${input} demasiado pesado`;
                }
              }else if(input==="weightImperialMax" || input==="weightMetricMax"){
                if(value>200){
                  errors[input]=`${input} demasiado pesado`;
                }else if((input==="weightImperialMax" && 
                          (value<datosRaza.weightImperialMin && datosRaza.weightImperialMin!=="")) ||
                          (input==="weightMetricMax" && 
                          (value<datosRaza.weightMetricMin && datosRaza.weightMetricMin!==""))
                ){
                  errors[input]=`Rango invalido en ${input}`;
                }}}}
        }else{
          if(value<datosRaza.life_spanMin && datosRaza.life_spanMin!==""){ 
            errors[input]=`Rango invalido en ${input}`;
        }
    }
    return errors;
}
module.exports = {validarCamposCrearRaza}