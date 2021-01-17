const mongoose = require("mongoose");

const schoolTeacher = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
    desig: {
        type: String,
        required: true,
    },
});

const schoolTeacherSchema = mongoose.model(
    "schoolTeacherSchema",
    schoolTeacher
);
module.exports = schoolTeacherSchema;
