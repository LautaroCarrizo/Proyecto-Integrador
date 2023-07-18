const  express = require("express")
const getCharById = require("../controllers/getCharByid")
const login = require("../controllers/login")
const {postFav, deleteFav} = require("../controllers/handleFavorites")

const routes = express.Router()

routes.get( "/character/:id", getCharById);

routes.get("/login", login);

routes.post("/fav", postFav);

routes.delete("/fav/:id", deleteFav)

module.exports = routes;