const mongoose = require("mongoose");

const ApplicationSchema = new mongoose.Schema({
  userEmail: {
    type: String,
    required: true
  },

  jobTitle: {
    type: String,
    required: true
  },

  company: {
    type: String,
    required: true
  },

  appliedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model(
  "Application",
  ApplicationSchema
);