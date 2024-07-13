import { JobRepository } from "../repositories/JobRepository"
import { AppError } from "../utils/AppError"

export interface IJobService {
    id?: string,
    title: string,
    description: string
}

export class JobService {

    create({ title, description }: IJobService) {
        const repository = new JobRepository()

        if (title.length <= 4) {
            throw new AppError("O titulo da vaga precisa possuir mais de 4 caracteres")
        }

        if (title.length >= 70) {
            throw new AppError("O titulo da vaga não pode possuir mais de 70 caracteres")
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