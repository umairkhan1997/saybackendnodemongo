const mongoose = require("mongoose");

const incubationCategory = mongoose.Schema({
  catImg: {
    type: String,
    required: true,
  },
  catName: {
    type: String,
    required: true,
  },
});

const incubationCategorySchema = mongoose.model(
  "incubationCategorySchema",
  incubationCategory
);
module.exports = incubationCategorySchema;
