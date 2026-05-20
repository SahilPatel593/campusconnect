// controllers/authController.js
// ============================================================
// Authentication Controller - Handles user auth operations
// ============================================================

import User from '../models/User.js'
import { generateToken } from '../middleware/authMiddleware.js'
import { asyncHandler, ApiError } from '../middleware/errorHandler.js'

/**
 * Register New User
 * POST /api/auth/register
 */
export const register = asyncHandler(async (req, res) => {
  const { name, email, password, department, rollNumber } = req.body

  // Validation
  if (!name || !email || !password) {
    throw new ApiError('Please provide all required fields', 400)
  }

  // Check if user exists
  const existingUser = await User.findOne({ email })
  if (existingUser) {
    throw new ApiError('User with this email already exists', 400)
  }

  // Create user
  const user = await User.create({
    name,
    email,
    password,
    department,
    rollNumber
  })

  // Generate token
  const token = generateToken(user._id)

  res.status(201).json({
    success: true,
    message: 'User registered successfully',
    token,
    user: user.getPublicData()
  })
})

/**
 * Login User
 * POST /api/auth/login
 */
export const login = asyncHandler(async (req, res) => {
  const { email, password } = req.body

  // Validation
  if (!email || !password) {
    throw new ApiError('Please provide email and password', 400)
  }

  // Find user and check password
  const user = await User.findOne({ email }).select('+password')
  if (!user) {
    throw new ApiError('Invalid credentials', 401)
  }

  const isPasswordValid = await user.comparePassword(password)
  if (!isPasswordValid) {
    throw new ApiError('Invalid credentials', 401)
  }

  // Update last login
  user.lastLogin = new Date()
  await user.save()

  // Generate token
  const token = generateToken(user._id)

  res.json({
    success: true,
    message: 'Login successful',
    token,
    user: user.getPublicData()
  })
})

/**
 * Get Current User Profile
 * GET /api/auth/profile
 */
export const getProfile = asyncHandler(async (req, res) => {
  const user = await User.findById(req.user.id)

  if (!user) {
    throw new ApiError('User not found', 404)
  }

  res.json({
    success: true,
    user: user.getPublicData()
  })
})

/**
 * Update User Profile
 * PUT /api/auth/profile
 */
export const updateProfile = asyncHandler(async (req, res) => {
  const { name, phone, address, department } = req.body

  const user = await User.findByIdAndUpdate(
    req.user.id,
    { name, phone, address, department },
    { new: true, runValidators: true }
  )

  if (!user) {
    throw new ApiError('User not found', 404)
  }

  res.json({
    success: true,
    message: 'Profile updated successfully',
    user: user.getPublicData()
  })
})

/**
 * Change Password
 * PUT /api/auth/change-password
 */
export const changePassword = asyncHandler(async (req, res) => {
  const { currentPassword, newPassword } = req.body

  if (!currentPassword || !newPassword) {
    throw new ApiError('Please provide current and new password', 400)
  }

  const user = await User.findById(req.user.id).select('+password')

  const isPasswordValid = await user.comparePassword(currentPassword)
  if (!isPasswordValid) {
    throw new ApiError('Current password is incorrect', 401)
  }

  user.password = newPassword
  await user.save()

  res.json({
    success: true,
    message: 'Password changed successfully'
  })
})

/**
 * Logout User
 * POST /api/auth/logout
 */
export const logout = asyncHandler(async (req, res) => {
  res.json({
    success: true,
    message: 'Logged out successfully'
  })
})
