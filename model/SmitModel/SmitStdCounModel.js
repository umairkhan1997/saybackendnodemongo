const mongoose = require("mongoose");

const SmitStdCoun = mongoose.Schema({
  counName: {
    type: String,
    unique: true,
    required: true,
  },
  counStrNum: {
    type: String,
    unique: true,
    required: true,
  },
  counEndNum: {
    type: String,
    unique: true,
    required: true,
  },
});

const SmitStdCounSchema = mongoose.model("SmitStdCounSchema", SmitStdCoun);
module.exports = SmitStdCounSchema;
