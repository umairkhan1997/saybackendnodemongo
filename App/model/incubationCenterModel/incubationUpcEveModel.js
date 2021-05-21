const mongoose = require("mongoose");

const incubationUpcEve = mongoose.Schema({
  eveDate: {
    type: String,
    required: true,
  },
  eveName: {
    type: String,
    required: true,
  },
  eveTime: {
    type: String,
    required: true,
  },
  eveImg: {
    type: String,
    required: true,
  },
});

const incubationUpcEveSchema = mongoose.model(
  "incubationUpcEveSchema",
  incubationUpcEve
);
module.exports = incubationUpcEveSchema;
