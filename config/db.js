import { Sequelize } from "sequelize";

const db = new Sequelize('sistema', 'root', '', {
    host: 'localhost',
    dialect: 'mysql'
})

export default db