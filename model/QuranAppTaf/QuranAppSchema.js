const mongoose = require("mongoose");

const QuranAppModel = mongoose.Schema({
  logo: {
    type: String,
    required: true,
  },
  appName: {
    type: String,
    required: true,
  },
  publisher: {
    type: String,
    required: true,
  },
  curVer: {
    type: String,
    required: true,
  },
  compDate: {
    type: String,
    required: true,
  },
  status: {
    type: String,
    required: true,
  },
});

const QuranAppModelSchema = mongoose.model(
  "QuranAppModelSchema",
  QuranAppModel
);
module.exports = QuranAppModelSchema;
