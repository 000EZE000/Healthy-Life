const { DataTypes } = require("sequelize");
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.

const Recipe = (sequelize) => {
  sequelize.define(
    "recipe",
    {
      id: {
        type: DataTypes.STRING,
        primaryKey: true,
        allowNull: false,
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dish_summary: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
      healthy_food_score: {
        type: DataTypes.REAL,
      },
      step_by_step: {
        type: DataTypes.ARRAY(DataTypes.JSON),
      },
      image:{
        type:DataTypes.STRING
      }
    },
    {
      timestamps: false,
    }
  );
};

module.exports = Recipe;
