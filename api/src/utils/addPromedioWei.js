const addPromedioWei=(rtaRazasApi)=>{
    rtaRazasApi.map((razas)=>{
        var promedio=0;
        var splitWeiMetric="";
        if(razas.weight.metric){
            splitWeiMetric=razas.weight.metric.replace(/ /g, "").split("-");
        }if(splitWeiMetric[1]){
            promedio=(parseFloat(splitWeiMetric[0])+parseFloat(splitWeiMetric[1]))/2;
        }else{
            promedio=splitWeiMetric[0];
        }
        razas.promedioWeiMetric=promedio.toString();

        promedio=0;
        var splitWeiImperial="";
        if(razas.weight.imperial){
            splitWeiImperial=razas.weight.imperial.replace(/ /g, "").split("-");
        }if(splitWeiImperial[1]){
            promedio=(parseFloat(splitWeiImperial[0])+parseFloat(splitWeiImperial[1]))/2;
        }else{
            promedio=splitWeiImperial[0];
        }
        razas.promedioWeiImperial=promedio.toString();
        return razas;
    })
}

module.exports={addPromedioWei}