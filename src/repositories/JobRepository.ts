export class JobRepository {

    create(id: number){
        return {message: `Criado no banco de dados o registro com o ID: ${id}.`}
    }

    findAll(){
        return {message: "Todos os registros do banco de dados"}
    }

    findById(id: number){
        return {message: `Registro pelo ${id} do banco de dados`}
    }

    update(){
        return {message: "Atualizado no banco de dados"}
    }

    delete(){
        return {message: "Deletado do banco de dados"}
    }

}