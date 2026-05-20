// middleware/errorHandler.js
// ============================================================
// Error Handler Middleware
// ============================================================

/**
 * Custom Error Class
 */
export class ApiError extends Error {
  constructor(message, status = 500) {
    super(message)
    this.status = status
  }
}

/**
 * Async Handler - Wrap async route handlers
 */
export const asyncHandler = (fn) => (req, res, next) => {
  Promise.resolve(fn(req, res, next)).catch(next)
}

/**
 * Error Response Handler
 */
export const errorResponse = (err, req, res, next) => {
  console.error('Error:', err)

  const error = {
    success: false,
    message: err.message || 'Internal Server Error',
    status: err.status || 500
  }

  // Mongoose Validation Error
  if (err.name === 'ValidationError') {
    error.message = Object.values(err.errors)
      .map(e => e.message)
      .join(', ')
    error.status = 400
  }

  // Mongoose Duplicate Key Error
  if (err.code === 11000) {
    error.message = `${Object.keys(err.keyPattern)[0]} already exists`
    error.status = 400
  }

  // JWT Errors
  if (err.name === 'JsonWebTokenError') {
    error.message = 'Invalid token'
    error.status = 401
  }

  if (err.name === 'TokenExpiredError') {
    error.message = 'Token expired'
    error.status = 401
  }

  // Send error response
  res.status(error.status).json({
    success: false,
    message: error.message,
    ...(process.env.NODE_ENV === 'development' && { error: err })
  })
}

/**
 * Validation Error Handler
 */
export const validationErrorResponse = (errors) => {
  const errorMessages = {}
  errors.array().forEach(error => {
    errorMessages[error.param] = error.msg
  })
  return errorMessages
}
