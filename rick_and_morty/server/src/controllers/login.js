const usuarios = require("../utils/users");

function login(req, res) {
  const { email, password } = req.query;
  const userFound = usuarios.find((user) =>user.email === email && user.password === password)

  if (userFound) return res.status(200).json({access: true})
  return res.status(404).json({access: false})
}

module.exports = login;
