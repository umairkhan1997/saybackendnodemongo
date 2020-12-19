const mongoose = require("mongoose");

const RoPlantIntro = mongoose.Schema({
  imgRoPlant: {
    type: String,
    required: true,
  },
  mainHead: {
    type: String,
    required: true,
  },
  headDetail: {
    type: String,
    required: true,
  },
});

const RoPlantSchema = mongoose.model("RoPlantIntroSchema", RoPlantIntro);
module.exports = RoPlantSchema;
