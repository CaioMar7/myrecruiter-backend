import { Request, Response } from "express";
import { IJobService, JobService } from "../services/JobService";

export class JobsController {
    async create(request: Request, response: Response) {

        const { title, description } = request.body as IJobService

        const jobService = new JobService

        response.send(jobService.create({title, description}))
    }

    async findAll(request: Request, response: Response) {

        const jobService = new JobService

        response.send(jobService.findAll())
    }

    async findById(request: Request, response: Response) {

        const { id } = request.params

        const jobService = new JobService

        response.send(jobService.findById(parseInt(id)))
    }

    async update(request: Request, response: Response) {

        const { title, description } = request.body

        const jobService = new JobService

        response.send(jobService.update({ title, description }))
    }

    async delete(request: Request, response: Response) {

        const jobService = new JobService

        response.send(jobService.delete())
    }

}

module.exports = JobsController
