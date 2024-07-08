import { Router } from 'express';
import { criarUsuario, getUsuarios, updateUsuario, deleteUsuario } from '../controller/usuario_controller.js';

const router = Router();

router.post('/usuarios', criarUsuario);
router.get('/usuarios', getUsuarios);
router.put('/usuarios/:cpf', updateUsuario);
router.delete('/usuarios/:cpf', deleteUsuario);

export default router;
