const mongoose = require('mongoose')
const Schema = mongoose.Schema

const gameSchema = new Schema({
  name: {type: String, required: true},
  publisher: String,
  designer: String,
  releaseYear: Number
}, {
  timestamps: true
})

module.exports = mongoose.model('Game', gameSchema)