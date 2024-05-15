import asyncHandler from 'express-async-handler';
import Payments from '../models/paymentModel.js';

/**
 * Get all Payments.
 * @returns {Object} Payments Document Object
 */
const getPayments = asyncHandler(async (req, res) => {
  const result = await Payments.find();
  res.status(200).json(result);
});

/**
 * Create new Payments.
 * @returns {Object} Payments Document Object
 */
const setPayments = asyncHandler(async (req, res) => {
  const result = await Payments.create(req.body);
  res.status(201).json(result);
});

/**
 * Update an existing Payment.
 * @returns {Object} UpdateWriteOpResult Object
 */
const updatePayment = asyncHandler(async (req, res) => {
  const result = await Payments.updateOne({ payment_id: req.params.payment_id }, req.body);
  res.status(202).json(result);
});

/**
 * Delete an existing Payment.
 * @returns {Object} DeleteResult Object
 */
const deletePayment = asyncHandler(async (req, res) => {
  const result = await Payments.deleteOne({ payment_id: req.params.payment_id })
  res.status(202).json(result);
});

export {
  getPayments,
  setPayments,
  updatePayment,
  deletePayment
};

/**
 * TODO:
 * 1. Optimize get orders query skip, and limit (Paginated Result).
 * 2. Implement Payment Gateway (strife). API Consumption of third-party payment gateway 
 *    a. GCash - Input Reference Number (Secondary)
 *    b. Paymaya - Input Reference Number (Secondary)
 *    c. Credit/Debit Card (optional) - if tangent is available
 *    d. Bank Transfer (optional)
 *    e. Cash (Primary)
 * 
 */