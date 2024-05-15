import { Router } from 'express';
import * as paymentController from '../controllers/paymentController.js';

const router = Router();

router.get('/', paymentController.getPayments);
router.post('/', paymentController.setPayments);
router.put('/:payment_id', paymentController.updatePayment);
router.delete('/:payment_id', paymentController.deletePayment);

export default router;