import { Router } from 'express';
import * as userController from '../controllers/userController.js';

const router = Router();

router.get('/', userController.getUsers);
router.post('/', userController.setUsers);
router.put('/:user_id', userController.updateUser);
router.delete('/:user_id', userController.deleteUser);

export default router;