// config/database.js
// ============================================================
// MongoDB Database Connection Configuration
// ============================================================

import mongoose from 'mongoose'

/**
 * Connect to MongoDB Database
 */
const connectDB = async () => {
  try {
    const mongoURI = process.env.MONGODB_URI || 'mongodb://localhost:27017/campusconnect'

    console.log('🔄 Connecting to MongoDB...')
    console.log(`📍 URI: ${mongoURI.substring(0, 30)}...`)

    const conn = await mongoose.connect(mongoURI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })

    console.log(`✅ MongoDB Connected: ${conn.connection.host}`)
    console.log(`📊 Database: ${conn.connection.name}`)

    return conn
  } catch (error) {
    console.error('❌ MongoDB Connection Error:')
    console.error(error.message)
    
    // Exit process with failure
    process.exit(1)
  }
}

/**
 * Disconnect from MongoDB
 */
const disconnectDB = async () => {
  try {
    await mongoose.disconnect()
    console.log('🔌 MongoDB Disconnected')
  } catch (error) {
    console.error('Error disconnecting from MongoDB:', error.message)
    process.exit(1)
  }
}

export default connectDB
export { disconnectDB }
