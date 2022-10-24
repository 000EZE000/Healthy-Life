const { Recipe } = require('../db');

const querieRecipAll = async () => {
    const res = await Recipe.findAll({ raw: true });
    return res
};



module.exports = querieRecipAll;



// anda no tocar




// const alphabetically =async()=>{
// const myOrder = await Recipe.findAll({
//     raw:true,
//     order:[['name', 'ASC' ]]
// })

// console.log(myOrder[0])
// }

//alphabetically()

// const healthScore =async()=>{
//     const myOrder = await Recipe.findAll({
//         raw:true,
//         order:[['healthy_food_score', 'DESC' ]]
//     })
    
//     }

  //healthScore()  

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

