const mongoose = require("mongoose");

const SmitTeachers = mongoose.Schema({
  facName: {
    type: String,
    required: true,
  },
  facDesig: {
    type: String,
    required: true,
  },
  facImgUrl: {
    type: String,
    required: true,
  },
  course: {
    type: String,
    required: true,
  },
});

const SmitTeachersSchema = mongoose.model("SmitTeachersSchema", SmitTeachers);
module.exports = SmitTeachersSchema;
