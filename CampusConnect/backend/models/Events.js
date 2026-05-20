// models/Events.js
// ============================================================
// Events Model - College events and activities
// ============================================================

import mongoose from 'mongoose'

const eventsSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Please provide event title'],
    trim: true
  },
  description: {
    type: String,
    required: true
  },
  category: {
    type: String,
    enum: ['Academic', 'Sports', 'Cultural', 'Workshop', 'Club Activities'],
    required: true
  },
  date: {
    type: Date,
    required: true
  },
  time: String,
  location: {
    type: String,
    required: true
  },
  image: String,
  
  // Organizer
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  
  // Registration
  capacity: {
    type: Number,
    default: 100
  },
  registered: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  interested: [{
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User'
  }],
  
  // Details
  cost: {
    type: Number,
    default: 0
  },
  tags: [String],
  
  // Status
  status: {
    type: String,
    enum: ['upcoming', 'ongoing', 'completed', 'cancelled'],
    default: 'upcoming'
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
eventsSchema.index({ date: 1 })
eventsSchema.index({ category: 1 })

export default mongoose.model('Events', eventsSchema)
