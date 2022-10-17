const axios = require("axios");
require("dotenv").config();
const {API_KEY,ALL_RESULTS,URL} = process.env;
const getBaseData = async (request = null) => {

const getAllApi = {
  apiKey: API_KEY,
  addRecipeInformation: true,
  number: ALL_RESULTS,
}

const getNameApi = {
  apiKey: API_KEY,
  addRecipeInformation: true,
  query: request
}

  const params = request? getNameApi : getAllApi;

  try {
    const baseDataBruta = await axios({
    method: "get",
      url: URL,
      params,
    });
    return baseDataBruta.data.results;
  } catch (error) {
    console.log(`${error} 'error --- function -- getBasedata' ${__filename}`)
  }
};

module.exports = getBaseData;
