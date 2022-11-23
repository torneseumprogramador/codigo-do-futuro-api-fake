const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")
const ClientesController = require("../controllers/clientesController")

router.get('/', HomeController.index);

router.get('/clientes', ClientesController.index);


module.exports = router;
