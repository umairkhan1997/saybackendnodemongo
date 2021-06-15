const mongoose = require("mongoose");

const doorStepModel = mongoose.Schema({
    userName: {
        type: String,
        required: true
    },
    contactNumber: {
        type: String,
        required: true
    },
    area: {
        type: String,
        required: true
    },
    location: {
        type: String,
        required: true
    },
    date: {
        type: String,
        required: true
    },
});

const doorStepSchema = mongoose.model("doorStepSchema", doorStepModel);
module.exports = doorStepSchema;
