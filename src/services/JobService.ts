import { JobRepository } from "../repositories/JobRepository"

export interface IJobService {
    id?: number,
    title: string,
    description: string
}

export class JobService {

    create({ title, description }: IJobService){
        const repository = new JobRepository()
        
        if(!title || !description) {
            throw new Error("Todos os campos precisam ser preenchidos.")
        }

        return repository.create({ title, description })
    }

    findAll(): IJobService[]{
        const repository = new JobRepository()

        return repository.findAll()
    }

    findById(id: number): IJobService{
        const repository = new JobRepository()

        return repository.findById(id)
    }

    update({ title, description }: IJobService) {
        const repository = new JobRepository()

        return repository.update({title, description})
    }

    delete() {
        const repository = new JobRepository()

        return repository.delete()
    }

}