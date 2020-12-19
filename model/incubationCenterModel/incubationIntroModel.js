const mongoose = require("mongoose");

const incubationIntro = mongoose.Schema({
  incHead: {
    type: String,
    required: true,
  },
  incTxt: {
    type: String,
    required: true,
  },
  incTxt2: {
    type: String,
    required: true,
  },
  incImgUrl: {
    type: String,
    required: true,
  },
});

const incubationIntroSchema = mongoose.model(
  "incubationIntroSchema",
  incubationIntro
);
module.exports = incubationIntroSchema;
