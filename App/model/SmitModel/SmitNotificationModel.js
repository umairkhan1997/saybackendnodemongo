const mongoose = require("mongoose");

const SmitNotification = mongoose.Schema({
    cityName: {
        type: String,
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
    },
    courseId: {
        type: String,
        required: true,
    },
    year: {
        type: String,
        required: true,
    },
    duration: {
        type: String,
        required: true,
    },
    admissionLastDate: {
        type: String,
        required: true,
    },
    cityCode: {
        type: String,
        required: true,
    }
});

const SmitNotificationSchema = mongoose.model("SmitNotificationSchema", SmitNotification);
module.exports = SmitNotificationSchema;
