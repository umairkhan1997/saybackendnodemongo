const mongoose = require("mongoose");

const JobBankContact = mongoose.Schema({
  address: {
    type: String,
    required: true,
  },
  uanNum: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
});

const JobBankContactSchema = mongoose.model(
  "JobBankContactSchema",
  JobBankContact
);
module.exports = JobBankContactSchema;
