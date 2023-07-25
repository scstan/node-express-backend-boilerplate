import { Sequelize } from 'sequelize'
import dotenv from 'dotenv'
dotenv.config()
const { DB_NAME, DB_USER, DB_PASS, DB_HOST, DB_PORT } = process.env

const db = new Sequelize(DB_NAME as string, DB_USER as string, DB_PASS, {
    host: DB_HOST,
    port: DB_PORT as number | undefined,
    dialect: 'postgres'
});

(async () => {
    try {
        await db.authenticate();
        console.log('Connection has been established successfully.');
        await db.sync({ force: true })
    } catch (error) {
        console.error('Unable to connect to the database:', error);
        process.exit(0)
    }
})();

export default db