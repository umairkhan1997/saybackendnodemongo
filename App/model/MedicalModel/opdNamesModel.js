const mongoose = require("mongoose");

const OpdNameList = mongoose.Schema({
    opdName: {
        type: String,
        required: true,
    }
});

const OpdNameListSchema = mongoose.model(
    "OpdNameListSchema",
    OpdNameList
);
module.exports = OpdNameListSchema;
