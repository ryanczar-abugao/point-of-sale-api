import asyncHandler from 'express-async-handler';
import Orders from '../models/orderModel.js';

/**
 * Get all Orders.
 * @returns {Object} Orders Document Object
 */
const getOrders = asyncHandler(async (req, res) => {
  const result = await Orders.find();
  res.status(200).json(result);
});

/**
 * Create new Orders.
 * @returns {Object} Orders Document Object
 */
const setOrders = asyncHandler(async (req, res) => {
  const result = await Orders.create(req.body);
  res.status(201).json(result);
});

/**
 * Update an existing Order.
 * @returns {Object} UpdateWriteOpResult Object
 */
const updateOrder = asyncHandler(async (req, res) => {
  const result = await Orders.updateOne({ order_id: req.params.order_id }, req.body);
  res.status(202).json(result);
});

/**
 * Delete an existing Order.
 * @returns {Object} DeleteResult Object
 */
const deleteOrder = asyncHandler(async (req, res) => {
  const result = await Orders.deleteOne({ order_id: req.params.order_id })
  res.status(202).json(result);
});

export {
  getOrders,
  setOrders,
  updateOrder,
  deleteOrder
};

/**
 * TODO:
 * 1. Optimize get orders query skip, and limit (Paginated Result).
 */