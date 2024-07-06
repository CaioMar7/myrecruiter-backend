import { JobRepository } from "../repositories/JobRepository"

export class JobService {

    create(){
        const repository = new JobRepository()

        return repository.create()
    }

    findAll(){
        const repository = new JobRepository()

        return repository.findAll()
    }

    findById(){
        const repository = new JobRepository()

        return repository.findById()
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