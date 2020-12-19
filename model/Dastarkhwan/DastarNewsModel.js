const mongoose = require("mongoose");

const DastarNews = mongoose.Schema({
  newsHead: {
    type: String,
    required: true,
  },
  newsTxt: {
    type: String,
    required: true,
  },
  newsImgUrl: {
    type: String,
    required: true,
  },
});

const DastarNewsoSchema = mongoose.model("DastarNewsoSchema", DastarNews);
module.exports = DastarNewsoSchema;
