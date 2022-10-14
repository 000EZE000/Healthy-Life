const {Diet} = require('../../../db')

const {
  dataVegan,
  dataGlutenFree,
  dataKetogenic,
  dataVegetarian,
  dataPescetarian,
  dataPaleo,
  dataPrimal,
  dataLowFodmap,
  dataWhole30,
  dairyFree,
  noDiet
} = require('./data_diet')
const packDiet = async (diet) => {

  const packinf = {

    "vegan": { "name": "vegan", "info": dataVegan },
    "gluten free": { "name": "gluten free", "info": dataGlutenFree },
    "lacto ovo vegetarian": { "name": "lacto ovo vegetarian", "info": dataVegetarian },
    "paleolithic": { "name": "paleolithic", "info": dataPaleo },
    "pescatarian": { "name": "pescatarian", "info": dataPescetarian },
    "primal": { "name": "primal", "info": dataPrimal },
    "fodmap friendly": { "name": "fodmap friendly", "info": dataLowFodmap },
    "whole 30": { "name": "whole 30", "info": dataWhole30 },
    "dairy free": { "name": "dairy free", "info": dairyFree },
    "ketogenic": { "name": "ketogenic", "info": dataKetogenic },
    "noDiet": { name: "noDiet", "info": noDiet }
  }
  const dietPack =  { 
    "vegan": await diet.create(packinf["vegan"]),
    "gluten free": await diet.create(packinf["gluten free"]),
    "lacto ovo vegetarian":  await diet.create(packinf["lacto ovo vegetarian"]),
    "paleolithic":  await diet.create(packinf["paleolithic"]),
    "pescatarian":  await diet.create(packinf["pescatarian"]),
    "primal":  await diet.create(packinf["primal"]),
    "fodmap friendly":  await diet.create(packinf["fodmap friendly"]),
    "whole 30":  await diet.create(packinf["whole 30"]),
    "dairy free":  await diet.create(packinf["dairy free"]),
    "ketogenic":  await diet.create(packinf["ketogenic"]),
    "noDiet":  await diet.create(packinf["noDiet"])
  }
  
  return dietPack

}



module.exports =  packDiet ;

