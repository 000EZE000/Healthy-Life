const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Diet = (sequelize) => {
  sequelize.define(
    "diet",
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: {
        type: DataTypes.STRING,
      },
      info: {
        type: DataTypes.TEXT,
      },
      image:{
        type:DataTypes.STRING,
        validator:{
          isUrl:{
            args:true,
            msg:'must be a url'
          }
        }
      }
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Diet;
