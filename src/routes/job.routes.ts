import { Router } from "express"

const JobsController = require("../controllers/JobsController")

const jobsRoutes = Router()

const jobsController = new JobsController()

jobsRoutes.get("/", jobsController.handle)
jobsRoutes.get("/create", jobsController.create)

module.exports = jobsRoutes

