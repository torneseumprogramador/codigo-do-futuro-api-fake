const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")
const UsuariosController = require("../controllers/usuariosController")

router.get('/', HomeController.index);

router.get('/usuarios', UsuariosController.index);


module.exports = router;
