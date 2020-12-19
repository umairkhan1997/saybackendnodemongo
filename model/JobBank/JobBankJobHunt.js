const mongoose = require("mongoose");

const JobBankJobHunt = mongoose.Schema({
  count: {
    type: String,
    required: true,
  },
  catName: {
    type: String,
    required: true,
  },
});

const JobBankJobHuntSchema = mongoose.model(
  "JobBankJobHuntSchema",
  JobBankJobHunt
);
module.exports = JobBankJobHuntSchema;
