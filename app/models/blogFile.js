const mongoose = require('mongoose');

const myfileSchema = new mongoose.Schema({
  file: String,
  description:String,
});

module.exports = mongoose.model('blogFile', myfileSchema);
