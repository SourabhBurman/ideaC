const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  title: { type: String },
  author: { type: String },
  description:{ type: String},
  buyPrice: { type: Number},
  owner: { type: mongoose.Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Book', bookSchema);
