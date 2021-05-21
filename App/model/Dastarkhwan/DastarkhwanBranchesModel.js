const mongoose = require("mongoose");

const DastarkhwanBranches = mongoose.Schema({
  typeName: {
    type: String,
    required: true,
  },
  typeNumber: {
    type: String,
    required: true,
  },
});

const DastarkhwanBranchesSchema = mongoose.model(
  "DastarkhwanBranchesSchema",
  DastarkhwanBranches
);
module.exports = DastarkhwanBranchesSchema;
