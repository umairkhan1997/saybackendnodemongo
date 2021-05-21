const mongoose = require("mongoose");

const SmitStdCoun = mongoose.Schema({
  counName: {
    type: String,
    required: true,
  },
  counStrNum: {
    type: String,
    required: true,
  },
  counEndNum: {
    type: String,
    required: true,
  },
  icon: {
    type: String,
    required: true,
  },
});

const SmitStdCounSchema = mongoose.model("SmitStdCounSchema", SmitStdCoun);
module.exports = SmitStdCounSchema;
