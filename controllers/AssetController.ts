import { Request, Response } from 'express'
import AssetService from '../services/AssetService'

const createAsset = async (req: Request, res: Response) => {
    try {
        const resp = await AssetService.createAsset()
        return res.json(resp)
    } catch (err) {
        return res.status(500).json({ message: 'Oops something blew up' })
    }
}

const getAsset = async (req: Request, res: Response) => {
    try {
        const resp = await AssetService.getAsset(req.params.uuid)
        if (!resp) return res.status(404).json({ message: 'Resource not found' })
        return res.json(resp)
    } catch (err) {
        return res.status(500).json({ message: 'Oops something blew up' })
    }
}

const getAssets = async (req: Request, res: Response) => {
    try {
        const resp = await AssetService.getAssets()
        return res.json(resp)
    } catch (err) {
        return res.status(500).json({ message: 'Oops something blew up' })
    }
}

const deleteAsset = async (req: Request, res: Response) => {
    try {
        const resp = await AssetService.deleteAsset(req.params.uuid)
        if (!resp) return res.status(404).json({ message: 'Resource not found' })
        return res.json(resp)
    } catch (err) {
        return res.status(500).json({ message: 'Oops something blew up' })
    }
}

export default {
    createAsset,
    getAsset,
    getAssets,
    deleteAsset
}