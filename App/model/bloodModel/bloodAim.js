const mongoose = require("mongoose");

const bloodAimModel = mongoose.Schema({
    bloodAim: {
        type: String,
        required: true,
    }
});

const bloodAimSchema = mongoose.model(
    "bloodAimSchema",
    bloodAimModel
);
module.exports = bloodAimSchema;
