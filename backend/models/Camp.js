const mongoose = require('mongoose');

const { v4: uuidv4 } = require('uuid'); // Import uuidv4

const campSchema = new mongoose.Schema({
  campID: {
    type: String,
    default: uuidv4,
    unique: true,
  },
  schoolName: { type: String, required: true },
  location: String,
  dateTime: Date,
  volunteer: String,
  doctor: String,
  contact: String,
  furtherDetails: String,

  studentsRegistered: {
    type: Number,
    default: 0, 
  },

  studentsPositive: {
    type: Number,
    default: 0,  
  },

  studentsScreened: {
    type: Number,
    default: 0,  
  },
  status: {
    type: String,
    default: "upcoming",  
  },
});

module.exports = mongoose.model('Camp', campSchema);
