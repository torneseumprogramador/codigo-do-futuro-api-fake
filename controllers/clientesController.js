const Cliente = require("../modelos/cliente");

module.exports = {
    index: async (req, res, next) => {
        const clientes = await Cliente.lista()
        res.status(200).send( clientes )
    },
    create: (req, res, next) => {
        const cliente = new Cliente(req.body)
        Cliente.salvar(cliente)
        res.status(201)
    }

};
