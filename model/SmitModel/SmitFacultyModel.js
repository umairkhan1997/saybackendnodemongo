const mongoose = require("mongoose");

const SmitFaculty = mongoose.Schema({
  facName: {
    type: String,
    unique: true,
    required: true,
  },
  facDesig: {
    type: String,
    unique: true,
    required: true,
  },
  facImgUrl: {
    type: String,
    unique: true,
    required: true,
  },
  facDescrip: {
    type: String,
    unique: true,
    required: true,
  },
});

const SmitFacultySchema = mongoose.model("SmitFacultySchema", SmitFaculty);
module.exports = SmitFacultySchema;
