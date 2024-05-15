import asyncHandler from 'express-async-handler';
import Products from '../models/productModel.js';

/**
 * Get all Products.
 * @returns {Object} Products Document Object
 */
const getProducts = asyncHandler(async (req, res) => {
  const result = await Products.find();
  res.status(200).json(result);
});

/**
 * Create new Products.
 * @returns {Object} Products Document Object
 */
const setProducts = asyncHandler(async (req, res) => {
  const result = await Products.create(req.body);
  res.status(201).json(result);
});

/**
 * Update an existing Product.
 * @returns {Object} UpdateWriteOpResult Object
 */
const updateProduct = asyncHandler(async (req, res) => {
  const result = await Products.updateOne({ product_id: req.params.product_id }, req.body);
  res.status(202).json(result);
});

/**
 * Delete an existing Product.
 * @returns {Object} DeleteResult Object
 */
const deleteProduct = asyncHandler(async (req, res) => {
  const result = await Products.deleteOne({ product_id: req.params.product_id })
  res.status(202).json(result);
});

export {
  getProducts,
  setProducts,
  updateProduct,
  deleteProduct
};

/**
 * TODO:
 * 1. Optimize get orders query skip, and limit (Paginated Result).
 */