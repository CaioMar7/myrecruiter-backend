import { prismaClient } from "../database/prisma"
import { IJobService } from "../services/JobService"

export class JobRepository {

     create({ title, description }: IJobService){
        const createdJob = prismaClient.job.create({
            data : {
                title,
                description
            }
        })

        return {title, description}
    }

    findAll(): IJobService[] {
        return [
            {id: 1, title: "exemplo", description: "teste"},
            {id: 2, title: "exemplo", description: "teste"},
            {id: 3, title: "exemplo", description: "teste"}
        ]
    }

    findById(id: number): IJobService {
        return {id, title: "exemplo", description: "teste"}
    }

    update({title, description} : IJobService) {
        return { message: `Titulo: XXXX - Descrição : XXXX, alterado para Título: ${title} - Descrição: ${description}` }
    }

    delete() {
        return { message: "Deletado do banco de dados" }
    }

}