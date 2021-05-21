const mongoose = require("mongoose");

const schoolCount = mongoose.Schema({
    typeName: {
        type: String,
        required: true,
    },
    typeNumber: {
        type: String,
        required: true,
    },
});

const schoolCountSchema = mongoose.model(
    "schoolCountSchema",
    schoolCount
);
module.exports = schoolCountSchema;
