const mongoose = require("mongoose");

const eventSchema = mongoose.Schema({
    eventName: {
        type: String,
        required: true,
    },
    eventnDescription: {
        type: String,
        required: true,
    },
    multiple_image: {
        type: [String],
        required: true,
    },
    eventcategory: {
        type: String,
        required: true,
    },
    eventTime: {
        type: String,
        required: true,
    },
    eventDate: {
        type: String,
        required: true,
    },
});

const eventModel = mongoose.model("eventSchema", eventSchema);
module.exports = eventModel;
