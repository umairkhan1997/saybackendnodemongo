const mongoose = require("mongoose");

const smitFacultyCourse = mongoose.Schema({
    courName: {
        type: String,
        required: true,
        unique: true
    },
    courVal: {
        type: String,
        required: true
    },
});

const smitFacultyCourseSchema = mongoose.model("smitFacultyCourseSchema", smitFacultyCourse);
module.exports = smitFacultyCourseSchema;
