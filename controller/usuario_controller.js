import Usuario from '../models/usuario_models.js';

export const getUsuarios = async (req, res) => {
    try {

        const usuarios = await Usuario.findAll()
        res.send(usuarios)

    } catch (e) {
        
        console.log("Erro ao acessar a tabela de Usuarios!", e);
       
    }
};

export const criarUsuario = async (req, res) => {
    try {

        await Usuario.create(req.body);
        res.status(201).json({ message: 'Um novo registro foi inserido na tabela de Usuarios!' });

    } catch (e) {

        console.log("Erro ao inserir um novo usuario", e);
        
    }
};

export const updateUsuario = async (req, res) => {
    try {

        const { cpf } = req.params;
        await Usuario.update(req.body, { where: { cpf } });
        res.json({ message: `Proprietário com CPF ${cpf} foi atualizado` });

    } catch (e) {

        console.log("Erro ao atualizar registro de usuario", e);
       
    }
};

export const deleteUsuario = async (req, res) => {
    try {

        const { cpf } = req.params;
        await Usuario.destroy({ where: { cpf } });
        res.json({ message: `Usuario com CPF ${cpf} foi excluído` });

    } catch (e) {

        console.log("Erro ao excluir registro de usuario", e);
        
    }
};
