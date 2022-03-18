import express, { Application, Request, Response } from "express"
const app = express()
const PORT = 3000
app.get("/", (req, res) => {
  res.send("HELLO WORLD")
})

app.listen(PORT, () => {
  console.log("Working")
})
