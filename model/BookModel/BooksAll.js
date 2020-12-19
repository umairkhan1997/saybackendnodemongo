const mongoose = require("mongoose");

const BookAll = mongoose.Schema({
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

const BookAllSchema = mongoose.model("BookAllSchema", BookAll);
module.exports = BookAllSchema;
