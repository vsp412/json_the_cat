const fetchBreedDescription = require ('./breedFetcher');
const q = process.argv[2];

fetchBreedDescription(q, (error, l) => {
  if (error) {
    console.log(error);
  } else {
    console.log(l);
  }
});


