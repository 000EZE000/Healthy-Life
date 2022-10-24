const tableRepice = require('../function/Bulcker/repice')
const { miFildLocal, findSearch, agreeSearh } = require('./search_title')
const getBaseData = require('../peticion_DATA_BASE')
const { tableInterme } = require('../function/Bulcker/intermediate_table')
const filteringResApi = require('./result_filtering')

const requestOfServer = async (request, repeat) => {
  

        const caseInsible = request.toLowerCase()

        const resultSearch = await findSearch(caseInsible)
        const resDataLocal = await miFildLocal(caseInsible)
        if (resultSearch) return await miFildLocal(caseInsible)
        if (resDataLocal === 0) return false

        await agreeSearh(caseInsible)

        if (!resultSearch) {
            const dataBruteName = await getBaseData(caseInsible);
            const recipeData = await tableRepice(dataBruteName);
            const newApi = await filteringResApi(recipeData)
            tableInterme(newApi)


        }

        return requestOfServer(caseInsible, repeat - 1)
 
}




const mySwitchSearch = async (request = undefined) => {

    request ?
        await requestOfServer(request, 1) :
        console.log('estoy esperando datos!!!')

}

module.exports = mySwitchSearch


