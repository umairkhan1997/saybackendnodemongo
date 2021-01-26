const mongoose = require("mongoose");

const OpdList = mongoose.Schema({
    opdName: {
        type: String,
        required: true,
    },
    desig: {
        type: String,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
    day: {
        type: String,
        required: true,
    },
    time: {
        type: String,
        required: true,
    },
});

const OpdListSchema = mongoose.model(
    "OpdListSchema",
    OpdList
);
module.exports = OpdListSchema;
