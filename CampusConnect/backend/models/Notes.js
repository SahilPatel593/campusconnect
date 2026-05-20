// models/Notes.js
// ============================================================
// Notes Model - Shared lecture notes
// ============================================================

import mongoose from 'mongoose'

const notesSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide a title'],
    trim: true,
    maxlength: [100, 'Title cannot exceed 100 characters']
  },
  subject: {
    type: String,
    required: true,
    enum: ['Data Structures', 'Web Development', 'Database Design', 'Software Engineering']
  },
  description: {
    type: String,
    trim: true
  },
  author: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  fileUrl: String,
  fileType: {
    type: String,
    enum: ['pdf', 'doc', 'docx', 'image', 'other']
  },
  tags: [String],
  
  // Engagement
  downloads: {
    type: Number,
    default: 0
  },
  likes: {
    type: Number,
    default: 0
  },
  likedBy: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  // Metadata
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
}, {
  timestamps: true
})

// Index for faster queries
notesSchema.index({ subject: 1, createdAt: -1 })
notesSchema.index({ author: 1 })

export default mongoose.model('Notes', notesSchema)
