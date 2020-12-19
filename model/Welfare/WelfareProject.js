const mongoose = require("mongoose");

const WelfareProject = mongoose.Schema({
  WelHead: {
    type: String,
    required: true,
  },
  WelHeadTwo: {
    type: String,
    unique: true,
    required: true,
  },
  welImg: {
    type: String,
    required: true,
  },
  welDesc: {
    type: String,
    required: true,
  },
});

const WelfareProjectSchema = mongoose.model(
  "WelfareProjectSchema",
  WelfareProject
);
module.exports = WelfareProjectSchema;
