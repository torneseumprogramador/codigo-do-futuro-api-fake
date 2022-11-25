const express = require('express');
const router = express.Router();
const HomeController = require("../controllers/homeController")
const ClientesController = require("../controllers/clientesController")

router.get('/', HomeController.index);

router.get('/clientes', ClientesController.index);
router.post('/cliente', ClientesController.create);
router.get('/cliente/:id', ClientesController.show);
router.delete('/cliente/:id', ClientesController.delete);
router.put('/cliente/:id', ClientesController.update);


module.exports = router;
