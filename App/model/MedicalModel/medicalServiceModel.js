const mongoose = require("mongoose");

const medicalService = mongoose.Schema({
    head: {
        type: String,
        required: true,
    },
    icon: {
        type: String,
        required: true,
    }
});

const medicalServiceSchema = mongoose.model("medicalServiceSchema", medicalService);
module.exports = medicalServiceSchema;
