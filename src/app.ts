import express, { Application, Request, Response } from "express"
const cors = require("cors")
const app: Application = express()

app.use(cors())
const PORT: Number = 3000
app.get("/", (req: Request, res: Response): void => {
  res.send("HELLO WORLD")
})

app.listen(PORT, (): void => {
  console.log(`Listening on ${PORT}`)
})
