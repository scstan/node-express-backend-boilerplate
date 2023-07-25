import express from "express"
import AssetController from "../controllers/AssetController"

export default (app: express.Application) => {
    app.post('/assets', AssetController.createAsset)
    app.get(`/assets/:uuid`, AssetController.getAsset)
    app.get(`/assets/`, AssetController.getAssets)
    app.delete(`/assets/:uuid`, AssetController.deleteAsset)
}