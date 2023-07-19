const axios = require("axios");
const URL = "https://rickandmortyapi.com/api/character/";

async function getCharByid(req, res) {
  const { id } = req.params;
  try {
    const response = await axios.get(`${URL}/${id}`);
    const { status, data } = response;
    if (status === 200 && data && data.id) {
      const character = {
        id: data.id,
        status: data.status,
        name: data.name,
        species: data.species,
        origin: data.origin?.name,
        image: data.image,
        gender: data.gender,
      };
      return res.json(character);
    } else {
      return res.status(404).json({ message: "Not Found" });
    }
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = getCharByid;
