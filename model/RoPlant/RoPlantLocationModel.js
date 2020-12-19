const mongoose = require("mongoose");

const RoPlantLocation = mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  area: {
    type: String,
    required: true,
  },
  mapLocation: {
    type: String,
    required: true,
  },
  underConstruction: {
    type: Boolean,
    required: true,
  }
});

const RoPlantLocationSchema = mongoose.model(
  "RoPlantLocationSchema",
  RoPlantLocation
);
module.exports = RoPlantLocationSchema;
