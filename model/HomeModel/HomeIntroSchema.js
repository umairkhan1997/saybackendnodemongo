const mongoose = require("mongoose");

const HomeIntro = mongoose.Schema({
  imgUrl: {
    type: String,
    unique: true,
    required: true,
  },
  introTxtOne: {
    type: String,
    unique: true,
    required: true,
  },
  introTxtTwo: {
    type: String,
    unique: true,
    required: true,
  },
});

const HomeIntroSchema = mongoose.model("HomeIntroSchema", HomeIntro);
module.exports = HomeIntroSchema;
