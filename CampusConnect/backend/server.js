// server.js
// ============================================================
// CampusConnect Backend Server
// Phase 4: Node.js + Express + MongoDB
// ============================================================

import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import connectDB from './config/database.js'

// Load environment variables
dotenv.config()

// Initialize Express App
const app = express()
const PORT = process.env.PORT || 5000

// ============================================================
// MIDDLEWARE
// ============================================================

// CORS Configuration
app.use(cors({
  origin: process.env.FRONTEND_URL || 'http://localhost:3000',
  credentials: true
}))

// Body Parser Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// ============================================================
// DATABASE CONNECTION
// ============================================================

// Connect to MongoDB
connectDB()

// ============================================================
// ROUTES
// ============================================================

// Health Check Route
app.get('/api/health', (req, res) => {
  res.json({
    status: 'OK',
    message: 'CampusConnect Backend is running',
    timestamp: new Date().toISOString()
  })
})

// API Routes (to be added)
// app.use('/api/auth', authRoutes)
// app.use('/api/attendance', attendanceRoutes)
// app.use('/api/notes', notesRoutes)
// app.use('/api/events', eventsRoutes)
// app.use('/api/assignments', assignmentsRoutes)

// ============================================================
// ERROR HANDLING MIDDLEWARE
// ============================================================

// 404 Not Found Handler
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'Route not found',
    path: req.path
  })
})

// Global Error Handler
app.use((err, req, res, next) => {
  console.error('Error:', err.message)
  
  res.status(err.status || 500).json({
    success: false,
    message: err.message || 'Internal Server Error',
    error: process.env.NODE_ENV === 'development' ? err : {}
  })
})

// ============================================================
// START SERVER
// ============================================================

app.listen(PORT, () => {
  console.log(`
  ╔════════════════════════════════════════════╗
  ║   🎓 CampusConnect Backend Server         ║
  ║   Status: Running                          ║
  ║   Port: ${PORT}                            ║
  ║   Environment: ${process.env.NODE_ENV}      ║
  ║   URL: http://localhost:${PORT}           ║
  ╚════════════════════════════════════════════╝
  `)
  console.log('📡 Server is listening for requests...')
})

// Handle Graceful Shutdown
process.on('SIGTERM', () => {
  console.log('SIGTERM received. Closing server...')
  process.exit(0)
})

export default app
