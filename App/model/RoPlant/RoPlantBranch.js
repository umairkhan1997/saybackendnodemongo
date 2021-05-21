const mongoose = require("mongoose");

const RoPlantBranch = mongoose.Schema({
  typeName: {
    type: String,
    required: true,
  },
  typeNumber: {
    type: String,
    required: true,
  },
});

const RoPlantBranchSchema = mongoose.model(
  "RoPlantBranchSchema",
  RoPlantBranch
);
module.exports = RoPlantBranchSchema;
