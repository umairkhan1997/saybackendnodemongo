const mongoose = require("mongoose");

const SmitWorksop = mongoose.Schema({
    Name: {
        type: String,
        required: true,
    },
    TeacherHostName: {
        type: String,
        required: true,
    },
    Date: {
        type: String,
        required: true,
    },
    vanue: {
        type: String,
        required: true,
    },
    Link: {
        type: String,
        required: true,
    }
});

const SmitWorksopSchema = mongoose.model(
    "SmitWorksopSchema",
    SmitWorksop
);
module.exports = SmitWorksopSchema;
