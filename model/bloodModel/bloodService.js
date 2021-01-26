const mongoose = require("mongoose");

const bloodServiceModel = mongoose.Schema({
    service: {
        type: String,
        required: true,
    }
});

const bloodService = mongoose.model(
    "bloodService",
    bloodServiceModel
);
module.exports = bloodService;
