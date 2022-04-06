import express, { Application, Request, Response } from "express"
import axios from "axios"
import "dotenv/config"
const cors = require("cors")
const app: Application = express()
//const datas: any = require("./worldDatas.json")
import datas from "./allDatas"
app.use(cors())
app.use(express.json())

const PORT: any = process.env.PORT

const findData = (index: any, data: string): any => {
  for (let i: number = 0; i < datas.WORLD.length; i++) {
    if (
      typeof datas.WORLD[i][index] === "object"
        ? datas.WORLD[i][index][0].toLowerCase() === data.toLowerCase() ||
          datas.WORLD[i][index][1].toLowerCase() === data.toLowerCase()
        : datas.WORLD[i][index].toLowerCase() === data.toLowerCase()
    )
      return {
        data: datas.WORLD[i],
        indexN: i,
        status: 200,
      }
  }
  return {
    data: null,
    indexN: -1,
    status: 404,
  }
}

const arrData = (index: string, data: string): any => {
  let response: any = {
    datas: [],
    length: 0,
  }
  for (let i: number = 0; i < datas.WORLD.length; i++) {
    if (datas.WORLD[i][index]) {
      if (datas.WORLD[i][index].toUpperCase() === data.toUpperCase()) {
        response.datas.push(datas.WORLD[i])
        response.length++
      }
    }
  }
  return response
}

app.get("/", (req: Request, res: Response): void => {
  res.status(200)
  res.send(datas)
})
app.get("/country/:Name", (req: Request, res: Response) => {
  const reSult = findData("countryName", req.params.Name)
  res.send(reSult)
})

app.get("/iso2/:iso2", (req: Request, res: Response): void => {
  const reSult = findData("iso2", req.params.iso2)
  res.status(reSult.status)
  res.send(reSult)
})

app.get("/iso3/:iso3", (req: Request, res: Response): void => {
  const reSult = findData("iso3", req.params.iso3)
  res.status(reSult.status)
  res.send(reSult)
})

app.get("/continent/:continent", (req: Request, res: Response): void => {
  res.status(arrData("continent", req.params.continent).length > 0 ? 200 : 404)
  res.send(
    arrData("continent", req.params.continent).length > 0
      ? arrData("continent", req.params.continent)
      : `There's no continent named ${req.params.continent}`
  )
})
app.get("/currency/:currency", (req: Request, res: Response): void => {
  res.status(
    arrData("currencyCode", req.params.currency).length > 0 ? 200 : 404
  )
  res.send(
    arrData("currencyCode", req.params.currency).length > 0
      ? arrData("currencyCode", req.params.currency)
      : `There's no Currency named ${req.params.currency}`
  )
})
/*
app.get("/noContinent", (_, res) => {
  let theDatas = []
  for (let i = 0; i < datas.length; i++) {
    if (!datas.WORLD[i].continent) {
      theDatas.push(datas.WORLD[i])
    }
  }
  res.send(theDatas)
})
*/

app.listen(PORT, (): void => {
  console.log(`Listening on ${PORT}`)
})
