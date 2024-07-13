import { Request, Response } from "express";
import { IJobService, JobService } from "../services/JobService";

export class JobsController {
    async create(request: Request, response: Response) {

        const { title, description } = request.body as IJobService

        const jobService = new JobService
        jobService.create({title, description})

        response.status(201).send({title, description})
    }

    async findAll(request: Request, response: Response) {

        const jobService = new JobService

        const allJobs = await jobService.findAll()

        response.send(allJobs)
    }

    async findById(request: Request, response: Response) {

        const { id } = request.params

        const jobService = new JobService

        const jobById = await jobService.findById(id)

        response.send(jobById)
    }

    async update(request: Request, response: Response) {

        const { id, title, description } = request.body

        const jobService = new JobService

        const jobToUpdate = await jobService.update({ id, title, description })

        response.send(jobToUpdate)
    }

    async delete(request: Request, response: Response) {

        const { id } = request.params

        const jobService = new JobService

        response.send(jobService.delete(id))
    }

}

module.exports = JobsController
