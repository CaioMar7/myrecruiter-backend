import { NextFunction, Request, Response } from "express";
import { IJobService, JobService } from "../services/JobService";

export class JobsController {
    create(request: Request, response: Response, next: NextFunction) {

        const { title, description } = request.body as IJobService

        const jobService = new JobService

        try {
            jobService.create({ title, description })
            response.status(201).send({ title, description })
        } catch (error) {
            next(error)
        }

    }

    async findAll(request: Request, response: Response, next: NextFunction) {

        const jobService = new JobService

        const allJobs = await jobService.findAll()

        response.send(allJobs)
    }

    async findById(request: Request, response: Response, next: NextFunction) {

        const { id } = request.params

        const jobService = new JobService

        try {
            const jobById = await jobService.findById(id)
            response.send(jobById)
        } catch (error) {
            next(error)
        }

    }

    async update(request: Request, response: Response, next: NextFunction) {

        const { id, title, description } = request.body as IJobService;

        const jobService = new JobService

        try {
            const updateJobById = await jobService.update({ id, title, description })
            response.send(updateJobById)
        } catch (error) {
            next(error)
        }
    }

    async delete(request: Request, response: Response, next: NextFunction) {

        const { id } = request.params

        const jobService = new JobService

        try {
            const deleteJobById = await jobService.delete(id)
            response.send(deleteJobById)
        } catch (error) {
            next(error)
        }

    }

}

module.exports = JobsController