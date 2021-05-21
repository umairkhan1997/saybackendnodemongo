const mongoose = require("mongoose");

const QuranAppIosModel = mongoose.Schema({
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

const QuranAppIosModelSchema = mongoose.model(
  "QuranAppIosModelSchema",
  QuranAppIosModel
);
module.exports = QuranAppIosModelSchema;
