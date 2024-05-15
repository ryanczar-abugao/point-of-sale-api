import asyncHandler from 'express-async-handler';
import Categories from '../models/categoryModel.js';

/**
 * Get all Categories.
 * @returns {Object} Categories Document Object
 */
const getCategories = asyncHandler(async (req, res) => {
  const result = await Categories.find();
  res.status(200).json(result);
});

/**
 * Create new Categories.
 * @returns {Object} Categories Document Object
 */
const setCategories = asyncHandler(async (req, res) => {
  const result = await Categories.create(req.body);
  res.status(201).json(result);
});

/**
 * Update an existing Categorie.
 * @returns {Object} UpdateWriteOpResult Object
 */
const updateCategory = asyncHandler(async (req, res) => {
  const result = await Categories.updateOne({ category_id: req.params.category_id }, req.body);
  res.status(202).json(result);
});

/**
 * Delete an existing Categorie.
 * @returns {Object} DeleteResult Object
 */
const deleteCategory = asyncHandler(async (req, res) => {
  const result = await Categories.deleteOne({ category_id: req.params.category_id })
  res.status(202).json(result);
});

export {
  getCategories,
  setCategories,
  updateCategory,
  deleteCategory
};

//TODO: 