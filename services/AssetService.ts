import { v4 as uuidv4 } from 'uuid';
import AssetModel from "../models/AssetModel"

const createAsset = async () => {
    return AssetModel.create({
        uuid: uuidv4(),
        bucket: 'Assets'
    })
}
const getAsset = async (uuid: string) => {
    return AssetModel.findOne({ where: { uuid } })
}

const getAssets = async () => {
    return AssetModel.findAll()
}

const deleteAsset = async (uuid: string) => {
    return AssetModel.destroy({ where: { uuid } })
}

export default {
    createAsset,
    getAsset,
    getAssets,
    deleteAsset
}