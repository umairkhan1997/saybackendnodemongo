const mongoose = require("mongoose");

const SmitNotification = mongoose.Schema({
    cityName: {
        type: String,
        required: true,
    },
    multiple_image: {
        type: [String],
        required: true,
    },
    courseName: {
        type: String,
        required: true,
    },
    batchName: {
        type: String,
        required: true,
    },
    viewForm: {
        type: Boolean,
        required: true,
    }
});

const SmitNotificationSchema = mongoose.model("SmitNotificationSchema", SmitNotification);
module.exports = SmitNotificationSchema;
