const mongoose = require("mongoose");

const benificiariesCount = mongoose.Schema({
    head: {
        type: String,
        required: true,
    },
    count: {
        type: String,
        required: true,
    }
});

const benificiariesCountSchema = mongoose.model("benificiariesCountSchema", benificiariesCount);
module.exports = benificiariesCountSchema;
