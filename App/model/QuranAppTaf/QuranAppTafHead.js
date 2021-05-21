const mongoose = require("mongoose");

const QuranAppTafHead = mongoose.Schema({
  headOne: {
    type: String,
    required: true,
  },
  headOneTxt: {
    type: String,
    required: true,
  },
  headTwo: {
    type: String,
    required: true,
  },
  headTwoTxt: {
    type: String,
    required: true,
  },
});

const QuranAppTafHeadSchema = mongoose.model(
  "QuranAppTafHeadSchema",
  QuranAppTafHead
);
module.exports = QuranAppTafHeadSchema;
