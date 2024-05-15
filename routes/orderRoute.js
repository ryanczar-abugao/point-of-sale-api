import { Router } from 'express';
import * as orderController from '../controllers/orderController.js';

const router = Router();

router.get('/', orderController.getOrders);
router.post('/', orderController.setOrders);
router.put('/:order_id', orderController.updateOrder);
router.delete('/:order_id', orderController.deleteOrder);

export default router;