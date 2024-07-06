import { JobRepository } from "../repositories/JobRepository"


export class JobService {

    create(id: number){
        const repository = new JobRepository()

        return repository.create(id)
    }

    findAll(){
        const repository = new JobRepository()

        return repository.findAll()
    }

    findById(id: number){
        const repository = new JobRepository()

        return repository.findById(id)
    }

    update(){
        const repository = new JobRepository()

        return repository.update()
    }

    delete(){
        const repository = new JobRepository()

        return repository.delete()
    }
    
}