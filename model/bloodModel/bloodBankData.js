const mongoose = require("mongoose");

const bloodBankData = mongoose.Schema({
    headOne: {
        type: String,
        required: true,
    },
    headOnedetail: {
        type: [{}],
        required: true,
    },
    headTwo: {
        type: String,
        required: true,
    },
    headDate: {
        type: String,
        required: true,
    },
    headCount: {
        type: String,
        required: true,
    },
});

const bloodBankDataSchema = mongoose.model("bloodBankDataSchema", bloodBankData);
module.exports = bloodBankDataSchema;
