const mongoose = require("mongoose");

const SmitContact = mongoose.Schema({
  address: {
    type: String,
    unique: true,
    required: true,
  },
  uanNum: {
    type: String,
    unique: true,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
  },
});

const SmitContactSchema = mongoose.model("SmitContactSchema", SmitContact);
module.exports = SmitContactSchema;
