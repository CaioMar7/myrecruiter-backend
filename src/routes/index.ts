const { Router } = require("express")

const routes = Router()

const jobsRouter = require("./job.routes")

routes.use("/jobs", jobsRouter)

module.exports = routes