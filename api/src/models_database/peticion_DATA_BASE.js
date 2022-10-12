const axios = require("axios");
require("dotenv").config();
const fs = require("fs");
const {API_KEY} = process.env;
const getBaseData = async () => {
  try {
    const baseDataBruta = await axios({
    method: "get",
      url: `https://api.spoonacular.com/recipes/complexSearch`,
      params: {
        apiKey: API_KEY,
        addRecipeInformation: true,
        number: 200,
      },
    });
 
    return baseDataBruta.data.results;
  } catch (error) {
    console.log(error)
  }
};

module.exports = getBaseData;
