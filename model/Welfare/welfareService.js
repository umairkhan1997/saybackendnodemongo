const mongoose = require("mongoose");

const WelfareService = mongoose.Schema({
    WelName: {
        type: String,
        required: true,
    },
    welIco: {
        type: String,
        required: true,
    }
});

const WelfareServiceSchema = mongoose.model(
    "WelfareServiceSchema",
    WelfareService
);
module.exports = WelfareServiceSchema;
