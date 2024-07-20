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
            .then((job) => {
                if (!job) {
                    throw new AppError("Nenhum usuário não encontrado com esse ID.", 400)
                }
                return job
            })

        return jobById
    }

    update({ id, title, description }: IJobService) {
        const repository = new JobRepository()

        if ( id && id.length != 24) {
            throw new AppError("Um ID válido precisa ser enviado.", 400)
        }

        if (title.length <= 4) {
            throw new AppError("Um título válido precisa ser enviado.", 400)
        }

        const findUserToUpdate = this.findById(id!).
        then(() => {
            return repository.update({ id, title, description })
        })

        return findUserToUpdate
    }

    delete(id: string) {
        const repository = new JobRepository()

        if (id.length < 24) {
            throw new AppError("Um ID válido precisa ser enviado.", 400)
        }

        const findUser = this.findById(id)
            .then((user) => {
                return repository.delete(user.id!)
            })

        return findUser
    }

}