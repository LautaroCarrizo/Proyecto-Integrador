const http = require("http");
const getCharByid = require("./controllers/getCharByid")


http
  .createServer((req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    let URL = req.url;
    if (URL.includes("/rickandmorty/character")) {
      let id = URL.split("/").pop();
      getCharByid(res, id)
    } else throw new Error("Not found 404");
  })
  .listen(3001, "localhost");



  
  
