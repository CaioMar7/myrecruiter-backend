import express from "express";
import { errorHandler } from "./middlewares/errorHandler";

const app = express()
app.use(express.json())

const routes = require("./routes")


app.use(routes)
app.use(errorHandler)

const PORT = 3333

app.listen(PORT, ()=> {
    console.log("Server is running on PORT:", PORT)
})