// routes/auth.js
// ============================================================
// Authentication Routes
// ============================================================

import express from 'express'
import {
  register,
  login,
  getProfile,
  updateProfile,
  changePassword,
  logout
} from '../controllers/authController.js'
import { protect } from '../middleware/authMiddleware.js'

const router = express.Router()

// Public Routes
router.post('/register', register)
router.post('/login', login)
router.post('/logout', logout)

// Protected Routes (require authentication)
router.get('/profile', protect, getProfile)
router.put('/profile', protect, updateProfile)
router.put('/change-password', protect, changePassword)

export default router
