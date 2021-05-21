const mongoose = require("mongoose");

const WelfareProject = mongoose.Schema({
  WelHead: {
    type: String,
    required: true,
  },
  welAmount: {
    type: String,
    required: true,
  },
  welQuan: {
    type: String,
    required: true,
  }
});

const WelfareProjectSchema = mongoose.model(
  "WelfareProjectSchema",
  WelfareProject
);
module.exports = WelfareProjectSchema;
