import asyncHandler from 'express-async-handler';
import Users from '../models/userModel.js';

/**
 * Get all Users.
 * @returns {Object} Users Document Object
 */
const getUsers = asyncHandler(async (req, res) => {
  const result = await Users.find();
  res.status(200).json(result);
});

/**
 * Create new Users.
 * @returns {Object} Users Document Object
 */
const setUsers = asyncHandler(async (req, res) => {
  const result = await Users.create(req.body);
  res.status(201).json(result);
});

/**
 * Update an existing User.
 * @returns {Object} UpdateWriteOpResult Object
 */
const updateUser = asyncHandler(async (req, res) => {
  const result = await Users.updateOne({ user_id: req.params.user_id }, req.body);
  res.status(202).json(result);
});

/**
 * Delete an existing User.
 * @returns {Object} DeleteResult Object
 */
const deleteUser = asyncHandler(async (req, res) => {
  const result = await Users.deleteOne({ user_id: req.params.user_id })
  res.status(202).json(result);
});

export {
  getUsers,
  setUsers,
  updateUser,
  deleteUser
};

/**
 * TODO:
 * 1. Optimize get orders query skip, and limit (Paginated Result).
 */