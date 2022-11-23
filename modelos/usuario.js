module.exports = class Usuario {
    constructor(){
        this.id = 0
        this.nome = ""
    }

    static async lista(){
        let usuarios = []
        const fs = require('fs');

        try {
            const jsonUsuarios = await fs.readFileSync('db/usuarios.json', 'utf8');
            usuarios = JSON.parse(jsonUsuarios)
        } catch (err) {
            console.error(err);
        }
        
        return usuarios
    }
}