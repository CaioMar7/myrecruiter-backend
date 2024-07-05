import express from "express";

const app = express()

const routes = require("./routes")

app.use(routes)

const PORT = 3333

app.listen(PORT, ()=> {
    console.log("Server is running on PORT:", PORT)
})