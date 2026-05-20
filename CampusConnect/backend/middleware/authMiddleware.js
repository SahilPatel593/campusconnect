// middleware/authMiddleware.js
// ============================================================
// Authentication Middleware - JWT verification
// ============================================================

import jwt from 'jsonwebtoken'

/**
 * Protect Routes - Verify JWT Token
 */
export const protect = async (req, res, next) => {
  let token

  // Get token from headers
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
    token = req.headers.authorization.split(' ')[1]
  }

  // Check if token exists
  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Not authorized to access this route'
    })
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET)
    req.user = decoded
    next()
  } catch (error) {
    return res.status(401).json({
      success: false,
      message: 'Token is not valid',
      error: error.message
    })
  }
}

/**
 * Grant Access to Specific Roles
 */
export const authorize = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return res.status(403).json({
        success: false,
        message: `User role '${req.user.role}' is not authorized to access this route`
      })
    }
    next()
  }
}

/**
 * Generate JWT Token
 */
export const generateToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: process.env.JWT_EXPIRE || '7d'
  })
}
