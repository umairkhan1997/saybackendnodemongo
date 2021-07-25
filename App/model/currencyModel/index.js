const mongoose = require("mongoose");

const currencySchema = mongoose.Schema({
    label: {
        type: String,
        required: true,
    },
    value: {
        type: String,
        required: true,
    },
});

const currencyModel = mongoose.model("currencySchema", currencySchema);
module.exports = currencyModel;
