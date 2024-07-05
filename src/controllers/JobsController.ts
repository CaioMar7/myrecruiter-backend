import { Request, Response } from "express";
import { JobService } from "../services/JobService";

export class JobsController {
    async handle(request: Request, response: Response) {
        response.send({ ok: "teste"}) 
    }

    async create(request: Request, response: Response) {

        const jobService = new JobService

        response.send(jobService.create("Criado"))
    }

}

module.exports = JobsController
