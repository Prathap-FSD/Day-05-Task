let jsonString = '{"fName":"Prathap","place":"Chennai","batch":"B53WD","course":"FSD","institute":"GUVI"}'

let jsonObject = JSON.parse(jsonString)

//!  For loop ---------------!//

// for(let i = 0; i<(Object.keys(jsonObject)).length; i++){
//     console.log(Object.keys(jsonObject)[i], ':' , jsonObject[Object.keys(jsonObject)[i]] );
// }

//!  For in ---------------!//

// for(let i in Object.keys(jsonObject)){
//     console.log(Object.keys(jsonObject)[i], ':', jsonObject[Object.keys(jsonObject)[i]]);
// }

//!  For of ---------------!//

// for(let pair of Object.entries(jsonObject)){
//     console.log(pair[0],':',pair[1]);
// }

//!  For Each ---------------!//

// Object.entries(jsonObject).forEach((entry)=>{
//     console.log(entry[0],':', entry[1]);
// })