import express, { Application, Request, Response } from "express"
const cors = require("cors")
const app: Application = express()
const datas = require("./world.json")

app.use(cors())
const PORT: Number = 3000
app.get("/", (req: Request, res: Response): void => {
  res.send(datas)
})

app.listen(PORT, (): void => {
  console.log(`Listening on ${PORT}`)
})
