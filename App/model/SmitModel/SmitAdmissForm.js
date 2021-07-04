const mongoose = require('mongoose');
const autoIncrement = require('mongoose-auto-increment');

autoIncrement.initialize(mongoose.connection);

let Schema = mongoose.Schema;

let smitAdmissForm = new Schema({
    fullName: {
        type: String,
    },
    email: {
        type: String,
    },
    gender: {
        type: String,
    },
    fatherName: {
        type: String,
    },
    ContactNumber: {
        type: String,
    },
    cnic: {
        type: String,
    },
    fatherCnic: {
        type: String,
    },
    dob: {
        type: String,
    },
    address: {
        type: String,
    },
    lastQualification: {
        type: String,
    },
    multiple_image: {
        type: [String],
    },
    batchName: {
        type: String,
    },
    cityName: {
        type: String,
    },
    courseName: {
        type: String,
    },
    generatedId: {
        type: String,
    },
    organizationName: {
        type: String,
    },
    position: {
        type: String,
    },
    nameProfessional: {
        type: String,
    },
    laptopAvailable: {
        type: String,
    },
    memberInstitution: {
        type: String,
    },
    membershipNumber: {
        type: String,
    },
    totalExperience: {
        type: String,
    },
    areaOfExperience: {
        type: String,
    },
    rateSkills: {
        type: String,
    },

});

smitAdmissForm.plugin(autoIncrement.plugin, {
    model: 'user',
    field: 'rollNo',
    startAt: 100,
    incrementBy: 1
});

const smitAdmissFormSchema = mongoose.model(
    "smitAdmissFormSchema",
    smitAdmissForm
);
module.exports = smitAdmissFormSchema;