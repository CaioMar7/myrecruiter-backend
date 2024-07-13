import { prismaClient } from "../database/prisma"
import { IJobService } from "../services/JobService"

export class JobRepository {

    async create({ title, description }: IJobService) {
        await prismaClient.job.create({
            data: {
                title,
                description
            }
        })

        return { title, description }
    }

    async findAll(): Promise<IJobService[]> {

        const listJob = await prismaClient.job.findMany() as IJobService[]

        return listJob
    }

    async findById(id: string): Promise<IJobService> {

        const jobById = await prismaClient.job.findFirst({
            where: {
                id
            }
        })
        
        return jobById!
    }

    async update({ id, title, description }: IJobService) {

        const updatedJob = {
            title,
            description,
            updated_at: new Date()
        }

        const updateJob = await prismaClient.job.update({
            where: {
                id
            }, data: updatedJob
        })

        return updateJob

    }

    async delete(id: string) {

        const jobById = await prismaClient.job.delete({
            where: {
                id
            }
        })

        return jobById!
    }

}