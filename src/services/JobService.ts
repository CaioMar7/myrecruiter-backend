import { JobRepository } from "../repositories/JobRepository"
import { AppError } from "../utils/AppErrors"

export interface IJobService {
    id?: string,
    title: string,
    description: string
}

export class JobService {

    create({ title, description }: IJobService) {
        const repository = new JobRepository()

        if (title.length <= 4) {
            throw new AppError("O titulo da vaga precisa possuir mais de 4 caracteres", 400)
        }

        if (title.length >= 70) {
            throw new AppError("O titulo da vaga não pode possuir mais de 70 caracteres", 400)
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
            throw new AppError("Um ID precisa ser enviado.", 400)
        }

        if (!title) {
            throw new AppError("Um título precisa ser enviado.", 400)
        }

        const jobToUpdate = repository.update({ id, title, description })

        return jobToUpdate
    }

    delete(id: string) {
        const repository = new JobRepository()

        return repository.delete(id)
    }

}