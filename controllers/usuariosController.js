const Usuario = require("../modelos/usuario");

module.exports = {
    index: async (req, res, next) => {
        const usuarios = await Usuario.lista()
        res.status(200).send( usuarios )
    }
};
