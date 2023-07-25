'use strict'
import express from 'express'
import cors from 'cors'
import AssetController from './controllers/AssetController' 

const PORT = 3001
const HOST = '0.0.0.0'

const app = express()
app.use(cors())

app.get('/', (req, res) => {
  res.json({ info: 'App is running!' })
})

app.post('/assets', AssetController.createAsset)
app.get(`/assets/:uuid`, AssetController.getAsset)
app.get(`/assets/`, AssetController.getAssets)
app.delete(`/assets/:uuid`, AssetController.deleteAsset)

app.listen(PORT, HOST, () => {
  console.log(`Running on http://${HOST}:${PORT}`)
})
