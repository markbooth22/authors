const mongoose = require('mongoose');

const AuthorSchema = new mongoose.Schema({
  authorName: { 
    type: String,
    required: [true, "Author's name is required!"],
    minlength: [3, "Author needs to be at least 3 characters"]
  },

}, {timestamps: true });

module.exports = mongoose.model('Author', AuthorSchema);