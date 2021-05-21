const mongoose = require("mongoose");

const schoolFeature = mongoose.Schema({
    qty: {
        type: String,
        required: true,
    },
    heading: {
        type: String,
        required: true,
    },
    subHead: {
        type: String,
        required: true,
    },
});

const schoolFeatureSchema = mongoose.model(
    "schoolFeatureSchema",
    schoolFeature
);
module.exports = schoolFeatureSchema;
