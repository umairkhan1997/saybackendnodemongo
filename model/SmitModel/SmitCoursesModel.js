const mongoose = require("mongoose");

const SmitCourses = mongoose.Schema({
  courName: {
    type: String,
    unique: true,
    required: true,
  },
  courTopic: {
    type: [String],
    required: true,
  },
  courDuration: {
    type: String,
    required: true,
  },
  courImgUrl: {
    type: String,
    required: true,
  },
});

const SmitCoursesSchema = mongoose.model("SmitCoursesSchema", SmitCourses);
module.exports = SmitCoursesSchema;
