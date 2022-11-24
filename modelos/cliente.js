module.exports = class Cliente {
    constructor(cliente){
        this.id = cliente?.id
        this.nome = cliente?.nome
        this.cpf = cliente?.cpf
        this.telefone = cliente?.telefone
        this.endereco = cliente?.endereco
        this.valor = cliente?.valor
    }


    // metodos staticos
    static async salvar(cliente){
        const listaClientes = await this.lista()
        let exist = false
        for(let i=0; i<listaClientes.length; i++){
            const clienteDb = listaClientes[i]
            if(clienteDb.id == cliente.id){
                clienteDb.nome == cliente.nome
                clienteDb.cpf == cliente.cpf
                clienteDb.endereco == cliente.endereco
                clienteDb.telefone == cliente.telefone
                clienteDb.valor == cliente.valor
                exist = true
                break
            }
        }

        if(!exist){
            const objectLiteral = {...cliente}
            listaClientes.push(objectLiteral)
        }

        const fs = require('fs');

        try {
            fs.writeFileSync('db/clientes.json', JSON.stringify(listaClientes), {encoding: "utf8"});
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