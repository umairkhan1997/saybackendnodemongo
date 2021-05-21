const mongoose = require("mongoose");

const dastLangList = mongoose.Schema({
  descrip: {
    type: String,
    required: true,
  },
  perDay: {
    type: String,
    required: true,
  },
  perMonth: {
    type: String,
    required: true,
  },
  perYear: {
    type: String,
    required: true,
  },
});

const dastLangListSchema = mongoose.model("dastLangListSchema", dastLangList);
module.exports = dastLangListSchema;
