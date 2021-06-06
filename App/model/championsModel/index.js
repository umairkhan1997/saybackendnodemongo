const mongoose = require("mongoose");

const championSchema = mongoose.Schema({
    championName: {
        type: String,
        required: true,
    },
    championDescription: {
        type: String,
        required: true,
    },
    championImg: {
        type: String,
        required: true,
    },
    championcategory: {
        type: String,
        required: true,
    },
    championLink: {
        type: String,
        required: true,
    },
    championTitle: {
        type: String,
        required: true,
    },
});

const championModel = mongoose.model("championSchema", championSchema);
module.exports = championModel;
