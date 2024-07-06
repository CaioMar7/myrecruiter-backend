import { Router } from "express"

const JobsController = require("../controllers/JobsController")

const jobsRoutes = Router()

const jobsController = new JobsController()

jobsRoutes.get("/create/:id", jobsController.create)
jobsRoutes.get("/", jobsController.findAll)
jobsRoutes.get("/show/:id", jobsController.findById)
jobsRoutes.get("/update", jobsController.update)
jobsRoutes.get("/delete", jobsController.delete)

module.exports = jobsRoutes

