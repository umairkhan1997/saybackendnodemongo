const mongoose = require("mongoose");

const Media = mongoose.Schema({
  medUrl: {
    type: String,
    required: true,
  },
  medName: {
    type: String,
    required: true,
  },
  medCat: {
    type: String,
    required: true,
  },
  medDate: {
    type: Date,
    default: Date.now,
    required: true,
  },
});

const MediaSchema = mongoose.model("MediaSchema", Media);
module.exports = MediaSchema;
