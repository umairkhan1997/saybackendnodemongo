const mongoose = require("mongoose");

const Media = mongoose.Schema({
  medUrl: {
    type: String,
    unique: true,
    required: true,
  },
  medName: {
    type: String,
    unique: true,
    required: true,
  },
});

const MediaSchema = mongoose.model("MediaSchema", Media);
module.exports = MediaSchema;
