export class JobRepository {

    create(){
        return {message: "Criado no banco de dados"}
    }

    findAll(){
        return {message: "Todos os registros do banco de dados"}
    }

    findById(){
        return {message: "Registro pelo Id do banco de dados"}
    }

    update(){
        return {message: "Atualizado no banco de dados"}
    }

    delete(){
        return {message: "Deletado do banco de dados"}
    }

}