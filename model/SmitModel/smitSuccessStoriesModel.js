const mongoose = require("mongoose");

const smitSuccessStories = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    designation: {
        type: String,
        required: true,
    },
    link: {
        type: String,
        required: true,
    },
    image: {
        type: String,
        required: true,
    },
});

const smitSuccessStoriesSchema = mongoose.model("smitSuccessStoriesSchema", smitSuccessStories);
module.exports = smitSuccessStoriesSchema;
