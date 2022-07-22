const getTemperamentos=async(Temperamento)=>{
    const TemperamentosDb=await Temperamento.findAll({
        attributes:["id","name"]
    });
    return TemperamentosDb;
}

module.exports = { getTemperamentos }

