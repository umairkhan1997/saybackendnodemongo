const mongoose = require("mongoose");

const bloodIntro = mongoose.Schema({
    bloodHead: {
        type: String,
        required: true,
    },
    bloodVideoUrl: {
        type: String,
        required: true,
    }
});

const bloodIntroSchema = mongoose.model(
    "bloodIntroSchema",
    bloodIntro
);
module.exports = bloodIntroSchema;
