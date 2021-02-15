// const request = require('request');
// const e = process.argv;
// const q = e.slice(2).toString();
// const a = (w) => {
//   if (!(w === undefined || w === "")) {    
//     request ('https://api.thecatapi.com/v1/breeds', (err, res, body) => {  
//       const data = JSON.parse(body);    
//       if (err) {     
//         console.log("Error accessing API");
//       } else {    
//         for (let y of data) {
//           if (y.name === w) {
//             console.log(y.description);
//           }
//         }
//       }    
//     });
//   } else {    
//     console.log("Enter breed name");
//   }
// }  

// a(q);




const request = require('request');
const fetchBreedDescription = (w, j) => {
  if (!(w === undefined || w === "")) {    
    request ('https://api.thecatapi.com/v1/breeds', (err, res, body) => {  
      const data = JSON.parse(body);    
      if (err) {     
        return j(err, null);
      } else {    
        for (let y of data) {
          if (y.name === w) {
            return j(null, y.description);
          }
        }
        return j(null, null);
      }    
    });
  } else {    
    return j("Enter proper valid string", null);
  }
}  
module.exports = fetchBreedDescription;

