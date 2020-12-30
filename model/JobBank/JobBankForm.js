const mongoose = require("mongoose");

const JobBankForm = mongoose.Schema({
    fullName: {
        type: String,
        required: true,
    },
    fatherName: {
        type: String,
        required: true,
    },
    placeOfBirth: {
        type: String,
        required: true,
    },
    date: {
        type: String,
        required: true,
    },
    gender: {
        type: String,
        required: true,
    },
    nationality: {
        type: String,
        required: true,
    },
    religion: {
        type: String,
        required: true,
    },
    cnic: {
        type: String,
        required: true,
    },
    telNumber: {
        type: String,
        required: true,
    },
    mobNumber: {
        type: String,
        required: true,
    },
    martialStatus: {
        type: String,
        required: true,
    },
    residentType: {
        type: String,
        required: true,
    },
    monthlyRent: {
        type: String,
        required: true,
    },
    disability: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    jobExperience: {
        type: String,
        required: true,
    },
    schoolName: {
        type: String,
        required: true,
    },
    schoolYeComp: {
        type: String,
        required: true,
    },
    schoolMajCor: {
        type: String,
        required: true,
    },
    schoolDegree: {
        type: String,
        required: true,
    },
    imgCollection: {
        type: [String],
        required: true,
    },
    SecondHighName: {
        type: String,
    },
    SecondYeComp: {
        type: String,
    },
    SecondMajCor: {
        type: String,
    },
    SecondDegree: {
        type: String,
    },
    colUniName: {
        type: String,
    },
    colUniYeComp: {
        type: String,
    },
    colUniMajCor: {
        type: String,
    },
    colUniDegree: {
        type: String,
    },
    instName: {
        type: String,
    },
    instYeComp: {
        type: String,
    },
    instMajCor: {
        type: String,
    },
    instDegree: {
        type: String,
    },
    occupation: {
        type: String,
    },
    age: {
        type: String,
    },
    favourite: {
        type: Boolean,
    },
});

const JobBankFormSchema = mongoose.model(
    "JobBankFormSchema",
    JobBankForm
);
module.exports = JobBankFormSchema;
