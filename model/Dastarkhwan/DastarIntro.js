const mongoose = require("mongoose");

const DastarIntro = mongoose.Schema({
  imgDas: {
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

const DastarIntroSchema = mongoose.model("DastarIntroSchema", DastarIntro);
module.exports = DastarIntroSchema;
