const mongoose = require("mongoose");

const OnlineIsthikhara = mongoose.Schema({
  istType: {
    type: String,
    required: true,
  },
  maleName: {
    type: String,
    required: true,
  },
  maleMotName: {
    type: String,
    required: true,
  },
  femName: {
    type: String,
    required: true,
  },
  femMotName: {
    type: String,
    required: true,
  },
  contact: {
    type: String,
    required: true,
  },
  istDetail: {
    type: String,
    required: true,
  },
});

const OnlineIsthikharaSchema = mongoose.model(
  "OnlineIsthikharaSchema",
  OnlineIsthikhara
);
module.exports = OnlineIsthikharaSchema;
