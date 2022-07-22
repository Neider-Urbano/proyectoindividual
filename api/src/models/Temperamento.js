const { DataTypes } = require('sequelize');
module.exports = (sequelize) => {
    sequelize.define('temperamento', {
        id:{
            type: DataTypes.UUID,
            defaultValue: DataTypes.UUIDV4,        
            allowNull: true,
            primaryKey: true,
        },
        name: {
            type: DataTypes.STRING,
            allowNull: true,
            unique: true,
        }
  },{
    timestamps:false
  });
};
