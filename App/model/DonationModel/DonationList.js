const mongoose = require("mongoose");

const DonaList = mongoose.Schema({
    data: {
        type: [],
        required: true
    }
});

const donationList = mongoose.model("donationList", DonaList);
module.exports = donationList;
