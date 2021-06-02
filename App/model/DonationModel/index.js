const mongoose = require("mongoose");
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);
const donationTransaction = mongoose.Schema({
    date: {
        type: String,
    },
    dateTransaction: {
        type: Date,
        default: Date.now,
    },
    amount: {
        type: String,
    },
    ordername: {
        type: String,
    },
    quantity: {
        type: String,
    },
    username: {
        type: String,
    },
    address: {
        type: String,
    },
    mobile: {
        type: String,
    },
    email: {
        type: String,
    },
    remarks: {
        type: String,
    },
    tstatus: {
        type: String,
    },
    approvalcode: {
        type: String,
    },
    cardno: {
        type: String,
    },
    device: {
        type: String,
    },
    bankTranId: {
        type: String,
    },
    donationTime: {
        type: String,
    },
});

donationTransaction.plugin(autoIncrement.plugin, {
    model: 'donationTransaction',
    field: 'tid',
    startAt: 100,
    incrementBy: 1
});

const donationTransactionSchema = mongoose.model("donationTransaction", donationTransaction);
module.exports = donationTransactionSchema;
