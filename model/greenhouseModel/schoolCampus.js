const mongoose = require("mongoose");

const schoolCampus = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    geoLocation: {
        type: String,
        required: true,
    },
});

const schoolCampusSchema = mongoose.model(
    "schoolCampusSchema",
    schoolCampus
);
module.exports = schoolCampusSchema;
