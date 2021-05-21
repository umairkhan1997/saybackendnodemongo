const mongoose = require("mongoose");

const ProjectsCategories = mongoose.Schema({
  proIcon: {
    type: String,
    required: true,
  },
  proName: {
    type: String,
    unique: true,
    required: true,
  },
  proDescrip: {
    type: String,
    required: true,
  },
  proHrefVal: {
    type: String,
    unique: true,
    required: true,
  },
});

const ProjectsCategoriesSchema = mongoose.model(
  "ProjectsCategoriesSchema",
  ProjectsCategories
);
module.exports = ProjectsCategoriesSchema;
