import { Router } from 'express';
import * as productController from '../controllers/productController.js';

const router = Router();

router.get('/', productController.getProducts);
router.post('/', productController.setProducts);
router.put('/:product_id', productController.updateProduct);
router.delete('/:product_id', productController.deleteProduct);

export default router;