let myFavorites = [];

function postFav(req, res) {
  const { character } = req.body;
  myFavorites.push(character);
  res.status(200).json(myFavorites); //estaba mandando mal el array dentro de un obj
}

function deleteFav(req, res) {
  console.log(req)
  const { id } = req.params;
  let filterFavorites = myFavorites.filter((char) => char.id !== +id);
  res.status(200).json(filterFavorites);
}

module.exports = { postFav, deleteFav };
