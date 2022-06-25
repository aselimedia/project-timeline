import { Sequelize } from "sequelize";

const db = new Sequelize('timeline', 'root', '', {
    host: 'localhost',
    dialect: 'mysql',
})

export default db;