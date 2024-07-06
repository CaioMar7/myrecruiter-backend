import { Router } from "express"

const JobsController = require("../controllers/JobsController")

const jobsRoutes = Router()

const jobsController = new JobsController()

jobsRoutes.get("/create", jobsController.create)
jobsRoutes.get("/findAll", jobsController.findAll)
jobsRoutes.get("/findById", jobsController.findById)
jobsRoutes.get("/update", jobsController.update)
jobsRoutes.get("/delete", jobsController.delete)

module.exports = jobsRoutes

