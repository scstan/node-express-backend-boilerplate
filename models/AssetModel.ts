import { DataTypes } from 'sequelize';
import db from "../core/db";

const AssetModel = db.define("asset", {
  uuid: DataTypes.TEXT,
  bucket: DataTypes.TEXT,
});

export default AssetModel