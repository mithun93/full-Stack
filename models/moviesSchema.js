const mongoose = require('mongoose')

const moviesSchema = new mongoose.Schema({
  id: String,
  name: String,
  availability: Number,
  review: String,
})

module.exports = mongoose.model("moviesSchema",moviesSchema);