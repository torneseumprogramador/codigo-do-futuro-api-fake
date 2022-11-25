const { v4: uuidv4 } = require("uuid");

module.exports = class Cliente {
    id;
    constructor(cliente){
        this.nome = cliente?.nome
        this.cpf = cliente?.cpf
        this.telefone = cliente?.telefone
        this.endereco = cliente?.endereco
        this.valor = cliente?.valor
    }


    // metodos staticos
    static async apagarPorId(id){
        const listaClientes = await this.lista();
        const listaNova = listaClientes.filter(cliente => cliente.id != id);
        Cliente.salvarJsonDisco(listaNova);
    }
    
    static async buscaPorId(id){
        const listaClientes = await this.lista();
        return listaClientes.find(cliente => cliente.id == id);
    }

    static async salvar(cliente){
        const listaClientes = await this.lista();
        const clienteExiste = listaClientes.includes(cliente);
        if(!clienteExiste) {
            cliente.id = uuidv4()
            listaClientes.push(cliente)
            Cliente.salvarJsonDisco(listaClientes)
        } 
    }

    static async salvarJsonDisco(clientes){
        const fs = require('fs');

        try {
            fs.writeFileSync('db/clientes.json', JSON.stringify(clientes), {encoding: "utf8"});
        } catch (err) {
            console.error(err);
        }
    }

    static async lista(){
        let clientes = []
        const fs = require('fs');

        try {
            const jsonClientes = await fs.readFileSync('db/clientes.json', 'utf8');
            clientes = JSON.parse(jsonClientes)
        } catch (err) {
            console.error(err);
        }
        
        return clientes
    }
}
