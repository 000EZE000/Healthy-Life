const { Recipe } = require('../db');

const querieRecipAll = async () => {
    const res = await Recipe.findAll({ raw: true });
    console.log(res);
};



module.exports = querieRecipAll;



// anda no tocar


// const querieRecipAll = async (data) => {
//     console.log(data)
//     const res = await Recipe.findAll({ raw: true,
//         where:{
//             name: {
//                 [Op.iLike]: `%${data}%`,
//               },
              

//         }
//     });
//     console.log(res);
// };


// const querieRecipAll = async (data) => {
//     console.log(data)
//     const res = await Recipe.findAll({ raw: true,
//         where:{
//             name: {
//                 [Op.iLike]: `%${data}%`,
//               },
             
//         },
//         attributes:{
//             exclude:['dish_summary','step_by_step','image']
//           }
//     });
//     console.log(res);
// };
