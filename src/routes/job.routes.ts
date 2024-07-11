import { Router } from "express"

const JobsController = require("../controllers/JobsController")

const jobsRoutes = Router()

const jobsController = new JobsController()

jobsRoutes.post("/create", jobsController.create)
jobsRoutes.get("/", jobsController.findAll)
jobsRoutes.get("/show/:id", jobsController.findById)
jobsRoutes.put("/update", jobsController.update)
jobsRoutes.delete("/delete", jobsController.delete)

module.exports = jobsRoutes

