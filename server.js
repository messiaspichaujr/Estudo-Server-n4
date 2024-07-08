import express from 'express';
import cors from 'cors';
import sequelize from './config/db.js';
import db from './config/db.js';
import usuarioRoutes from './routes/usuario_routes.js';

const server = express();

server.use(express.json());
server.use(cors());

try {
    await db.authenticate();
    console.log("Conexão com o Mysql estabelecida");
} catch (e) {
    console.log("Conexão com o Mysql Não estabelecida", e);
}

// Use as rotas de proprietarios
server.use('/api', usuarioRoutes);

server.listen(4000, () => console.log("servidor executando em http://localhost:4000"));