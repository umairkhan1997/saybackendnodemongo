const mongoose = require("mongoose");

const BookSpecial = mongoose.Schema({
  bookName: {
    type: String,
    required: true,
  },
  imgCollection: {
    type: String,
    required: true,
  },
  bookLang: {
    type: String,
    required: true,
  },
  bookAuthor: {
    type: String,
    required: true,
  },
  bookPublisher: {
    type: String,
    required: true,
  },
  bookDnldUrl: {
    type: String,
    required: true,
  },
});

const BookSpecialSchema = mongoose.model("BookSpecialSchema", BookSpecial);
module.exports = BookSpecialSchema;
