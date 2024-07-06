import { Request, Response } from "express";
import { JobService } from "../services/JobService";

export class JobsController {
    async create(request: Request, response: Response) {

        const jobService = new JobService

        response.send(jobService.create())
    }

    async findAll(request: Request, response: Response) {

        const jobService = new JobService

        response.send(jobService.findAll())
    }

    async findById(request: Request, response: Response) {

        const jobService = new JobService

        response.send(jobService.findById())
    }

    async update(request: Request, response: Response) {

        const jobService = new JobService

        response.send(jobService.update())
    }

    async delete(request: Request, response: Response) {

        const jobService = new JobService

        response.send(jobService.delete())
    }

}

module.exports = JobsController
