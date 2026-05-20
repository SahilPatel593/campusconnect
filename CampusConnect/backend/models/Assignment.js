// models/Assignment.js
// ============================================================
// Assignment Model - Course assignments
// ============================================================

import mongoose from 'mongoose'

const assignmentSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide assignment title'],
    trim: true
  },
  subject: {
    type: String,
    required: true,
    enum: ['Data Structures', 'Web Development', 'Database Design', 'Software Engineering']
  },
  description: {
    type: String,
    required: true
  },
  
  // Assignment Details
  assignedBy: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  dueDate: {
    type: Date,
    required: true
  },
  points: {
    type: Number,
    default: 10,
    min: 0,
    max: 100
  },
  
  // Submission
  submissions: [{
    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User'
    },
    submittedFile: String,
    submittedAt: Date,
    score: Number,
    feedback: String,
    status: {
      type: String,
      enum: ['submitted', 'graded', 'pending'],
      default: 'pending'
    }
  }],
  
  // Status
  status: {
    type: String,
    enum: ['active', 'closed', 'graded'],
    default: 'active'
  },
  
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Index for faster queries
assignmentSchema.index({ subject: 1, dueDate: 1 })
assignmentSchema.index({ assignedBy: 1 })

export default mongoose.model('Assignment', assignmentSchema)
