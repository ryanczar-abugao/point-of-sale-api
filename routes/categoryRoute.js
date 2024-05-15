import { Router } from 'express';
import * as categoryController from '../controllers/categoryController.js';

const router = Router();

router.get('/', categoryController.getCategories);
router.post('/', categoryController.setCategories);
router.put('/:category_id', categoryController.updateCategory);
router.delete('/:category_id', categoryController.deleteCategory);

export default router;