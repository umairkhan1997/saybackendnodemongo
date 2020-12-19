const mongoose = require("mongoose");

const OnlineQuranReg = mongoose.Schema({
  stdName: {
    type: String,
    required: true,
  },
  fthName: {
    type: String,
    required: true,
  },
  stnAge: {
    type: String,
    required: true,
  },
  stnDob: {
    type: String,
    required: true,
  },
  stnGen: {
    type: String,
    required: true,
  },
  stnCour: {
    type: String,
    required: true,
  },
  stnEmail: {
    type: String,
    required: true,
  },
  stnSkype: {
    type: String,
    required: true,
  },
  stnNumber: {
    type: String,
    required: true,
  },
  stnWtsApp: {
    type: String,
    required: true,
  },
  stnImgUrl: {
    type: String,
    required: true,
  },
});

const OnlineQuranRegSchema = mongoose.model(
  "OnlineQuranRegSchema",
  OnlineQuranReg
);
module.exports = OnlineQuranRegSchema;
