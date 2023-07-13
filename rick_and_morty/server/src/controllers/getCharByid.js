const axios = require("axios");

function getCharByid(res, id) {

  axios.get(`https://rickandmortyapi.com/api/character/${id}`)
    .then(({ data }) => {
      console.log(data);
      const characterObject = {
        name: data.name,
        gender: data.gender,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        status: data.status
      };

      res.writeHead(200, { "Content-Type": "application/json" });
      return res.end(JSON.stringify(characterObject));
    })
    .catch((error) => {
      res.writeHead(500, { "Content-Type": " text/plain" });
      return  res.end(error.message);
    });
}

module.exports = getCharByid;