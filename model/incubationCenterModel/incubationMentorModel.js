const mongoose = require("mongoose");

const incubationMentor = mongoose.Schema({
  menName: {
    type: String,
    required: true,
  },
  menDesig: {
    type: String,
    required: true,
  },
  menImgUrl: {
    type: String,
    required: true,
  },
});

const incubationMentorSchema = mongoose.model(
  "incubationMentorSchema",
  incubationMentor
);
module.exports = incubationMentorSchema;
