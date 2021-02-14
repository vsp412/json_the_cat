const request = require('request');
const e = process.argv;
const q = e.slice(2).toString();
const a = (w, j) => {
  if (!(w === undefined || w === "")) {    
    request ('https://api.thecatapi.com/v1/breeds', (err, res, body) => {  
      const data = JSON.parse(body);    
      if (err) {     
        return j("Error accessing API");
      } else {    
        for (let y of data) {
          if (y.name === w) {
            return j(y.description);
          }
        }
      }    
    });
  } else {    
    return j("Enter breed name");
  }
}  

a(q, (l) => {
  console.log(l);
});


