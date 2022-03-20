import express, { Application, Request, Response } from "express"
const cors = require("cors")
const app: Application = express()
const datas = require("./world.json")
app.use(cors())
app.use(express.json())

const PORT: Number = 3000

const findData = (index: any, data: string) => {
  for (let i = 0; i < datas.WORLD.length; i++) {
    if (
      typeof datas.WORLD[i][index] === "object"
        ? datas.WORLD[i][index][0].toLowerCase() === data.toLowerCase() ||
          datas.WORLD[i][index][1].toLowerCase() === data.toLowerCase()
        : datas.WORLD[i][index].toLowerCase() === data.toLowerCase()
    )
      return {
        data: datas.WORLD[i],
        indexN: i,
        status: 302,
      }
  }
  return {
    data: null,
    indexN: -1,
    status: 404,
  }
}

console.log(findData("countryName", "Tunisia"))

app.get("/", (req: Request, res: Response): void => {
  res.send(datas)
})
app.get("/countryName/:Name", (req: Request, res: Response) => {
  const reSult = findData("countryName", req.params.Name)
  res.status(reSult.status).send(reSult)
})

app.get("/iso2/:Name", (req: Request, res: Response) => {
  const reSult = findData("iso2", req.params.Name)
  res.status(reSult.status).send(reSult)
})

app.get("/iso3/:Name", (req: Request, res: Response) => {
  const reSult = findData("iso3", req.params.Name)
  res.status(reSult.status).send(reSult)
})

app.listen(PORT, (): void => {
  console.log(`Listening on ${PORT}`)
})
