const mongoose = require("mongoose");

const SmitTeacher = mongoose.Schema({
  tName: {
    type: String,
    required: true,
  },
  tCourName: {
    type: String,
    unique: true,
    required: true,
  },
  tImgURL: {
    type: String,
    required: true,
  },
});

const SmitTeacherSchema = mongoose.model("SmitTeacherSchema", SmitTeacher);
module.exports = SmitTeacherSchema;
