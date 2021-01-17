const mongoose = require("mongoose");

const patientTreated = mongoose.Schema({
    head: {
        type: String,
        required: true,
    },
    detail: {
        type: [{}],
        required: true,
    }
});

const patientTreatedSchema = mongoose.model("patientTreatedSchema", patientTreated);
module.exports = patientTreatedSchema;
