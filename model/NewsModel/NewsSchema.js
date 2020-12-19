const mongoose = require("mongoose");

const SaylaniNews = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    newsdate: {
        type: String,
        required: true,
    },
    newsPostDate: {
        type: Date,
        default: Date.now,
        required: true,
    },
    multiple_image: {
        type: [String],
        required: true,
    }
});

const SaylaniNewsSchema = mongoose.model(
    "SaylaniNewsSchema",
    SaylaniNews
);
module.exports = SaylaniNewsSchema;
