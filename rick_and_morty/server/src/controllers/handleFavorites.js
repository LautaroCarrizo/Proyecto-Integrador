let myFavorites = [];

function postFav(req, res) {
  const { character } = req.body;
  myFavorites.push(character);
  res.status(200).json(myFavorites); //estaba mandando mal el array dentro de un obj
}

function deleteFav(req, res) {
  const { id } = req.params;
  myFavorites = myFavorites.filter((char) => char.id !== Number(id));
  res.status(200).json(myFavorites);
}

module.exports = { postFav, deleteFav };
