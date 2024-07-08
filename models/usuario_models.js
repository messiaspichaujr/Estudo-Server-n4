import { Sequelize } from "sequelize";
import sequelize from '../config/db.js';

const Usuario = sequelize.define('Usuario', {
    cpf: {
        type: Sequelize.STRING,
        allowNull: false,
        primaryKey: true,
    },
    nome: {
        type: Sequelize.STRING,
        allowNull: false,
    },
    email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
    },
    telefone: {
        type: Sequelize.STRING,
        allowNull: false,
    },

}, {
    timestamps: false
});

export default Usuario;
