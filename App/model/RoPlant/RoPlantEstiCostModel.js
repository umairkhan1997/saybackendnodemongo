const mongoose = require("mongoose");

const RoPlantEstiCost = mongoose.Schema({
  actDes: {
    type: String,
    required: true,
  },
  qnt: {
    type: String,
    required: true,
  },
  amount7500: {
    type: String,
    required: true,
  },
  amount40000: {
    type: String,
    required: true,
  },
});

const RoPlantEstiCostSchema = mongoose.model(
  "RoPlantEstiCostSchema",
  RoPlantEstiCost
);
module.exports = RoPlantEstiCostSchema;
