import { JobRepository } from "../repositories/JobRepository"

export interface IJobService {
    id?: string,
    title: string,
    description: string
}

export class JobService {

    create({ title, description }: IJobService) {
        const repository = new JobRepository()

        if (!title || !description) {
            throw new Error("Todos os campos precisam ser preenchidos.")
        }

        return repository.create({ title, description })
    }

    findAll(): Promise<IJobService[]> {
        const repository = new JobRepository()

        const allJobs = repository.findAll()

        return allJobs
    }

    findById(id: string): Promise<IJobService> {
        const repository = new JobRepository()

        const jobById = repository.findById(id)

        return jobById
    }

    update({ id, title, description }: IJobService) {
        const repository = new JobRepository()

        if (!id) {
            throw new Error("Um ID precisa ser enviado.")
        }

        if (!title) {
            throw new Error("Um título precisa ser enviado.")
        }

        const jobToUpdate = repository.update({ id, title, description })

        return jobToUpdate
    }

    delete(id: string) {
        const repository = new JobRepository()

        return repository.delete(id)
    }

}