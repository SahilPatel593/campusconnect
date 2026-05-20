// models/Attendance.js
// ============================================================
// Attendance Model - Track student attendance
// ============================================================

import mongoose from 'mongoose'

const attendanceSchema = new mongoose.Schema({
  student: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  subject: {
    type: String,
    required: true,
    enum: ['Data Structures', 'Web Development', 'Database Design', 'Software Engineering']
  },
  date: {
    type: Date,
    required: true,
    default: Date.now
  },
  status: {
    type: String,
    enum: ['present', 'absent', 'late'],
    required: true
  },
  remarks: String,
  
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Index for faster queries
attendanceSchema.index({ student: 1, date: -1 })
attendanceSchema.index({ subject: 1, date: -1 })

export default mongoose.model('Attendance', attendanceSchema)
