const mongoose = require("mongoose");

const JobBankOffForm = mongoose.Schema({
    comName: {
        type: String,
        required: true,
    },
    natJob: {
        type: String,
        required: true,
    },
    location: {
        type: String,
        required: true,
    },
    approxSalary: {
        type: String,
        required: true,
    },
    timePeriod: {
        type: String,
        required: true,
    },
    hrContact: {
        type: String,
        required: true,
    },
    selectJbTyp: {
        type: String,
        required: true,
    },
    approxDur: {
        type: String,
    },
    expReq: {
        type: String,
        required: true,
    },
    jobDes: {
        type: String,
        required: true,
    },
});

const JobBankOffFormSchema = mongoose.model(
    "JobBankOffFormSchema",
    JobBankOffForm
);
module.exports = JobBankOffFormSchema;
