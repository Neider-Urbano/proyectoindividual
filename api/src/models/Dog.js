const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
  sequelize.define('dog', {
    id:{
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4, 
      allowNull: false,
      primaryKey: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      unique:true,
      validate:{
        isAlphanumeric: true,
        len:[1,40]
      }
    },
    weight:{
      type: DataTypes.JSON,
      allowNull: false,
      validate:{
        isEven(value){
          if(!value.hasOwnProperty("imperial")){
            throw new Error("peso imperial requerida")
          }else if(!value.hasOwnProperty("metric")){
            throw new Error("peso metric requerida")
          }
        }
      }
    },
    height:{
      type: DataTypes.JSON,
      allowNull: false,
      validate:{
        isEven(value){
          if(!value.hasOwnProperty("imperial")){
            throw new Error("Altura imperial requerida")
          }else if(!value.hasOwnProperty("metric")){
            throw new Error("Altura metric requerida")
          }
        }
      }
    },
    life_span:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"",
    },
    temperament:{
      type: DataTypes.STRING,
      allowNull: true,
      defaultValue:"",
    },
    image:{
      type: DataTypes.JSON,
      allowNull: true,
      defaultValue:"",
    },
  },{timestamps:false});
};
