const mongoose = require("mongoose");

const JobBankPopCat = mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  catName: {
    type: String,
    required: true,
  },
});

const JobBankPopCatSchema = mongoose.model(
  "JobBankPopCatSchema",
  JobBankPopCat
);
module.exports = JobBankPopCatSchema;
