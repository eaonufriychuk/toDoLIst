const mongoose = require('mongoose');

const toDo = mongoose.model('Task', new mongoose.Schema({
  task: String,
  priority: String,
  category: String,
  date: String
}))

module.exports = toDo;