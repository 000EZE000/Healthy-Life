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

const {
  veganImageUrl,
  glutenFreeImageUrl,
  lactoOvoVegetarianImageUrl,
  paleolithicImageUrl,
  pescatarianImageUrl,
  primalImageUrl,
  fodmapFriendlyImageUrl,
  whole30ImageUrl,
  dairyFreeImageUrl,
  ketogenicImageUrl,
  noDietImageUrl

} = require('./image_diet')



const myPackDiet = () => {
  const myObjPack = {}
  const myArrayNameDiet = ["vegan", "gluten free", "lacto ovo vegetarian", "paleolithic", "pescatarian", "primal", "fodmap friendly", "whole 30", "dairy free", "ketogenic", "noDiet"]
  const myArrayInfDiet = [dataVegan, dataGlutenFree, dataVegetarian, dataPaleo, dataPescetarian, dataPrimal, dataLowFodmap, dataWhole30, dairyFree, dataKetogenic, noDiet]
  const myArrayImage = [veganImageUrl, glutenFreeImageUrl, lactoOvoVegetarianImageUrl, paleolithicImageUrl, pescatarianImageUrl, primalImageUrl, fodmapFriendlyImageUrl, whole30ImageUrl, dairyFreeImageUrl, ketogenicImageUrl, noDietImageUrl]
  myArrayInfDiet.forEach((e, index) => {
    myObjPack[myArrayNameDiet[index]] = { name: myArrayNameDiet[index], info: e, image: myArrayImage[index] }
  })
  return myObjPack
}



module.exports = myPackDiet