const mongoose = require("mongoose");

const SmitCollaboration = mongoose.Schema({
  imageUrl: {
    type: String,
    required: true,
  },
  colName: {
    type: String,
    unique: true,
    required: true,
  },
});

const SmitCollaborationSchema = mongoose.model(
  "SmitCollaborationSchema",
  SmitCollaboration
);
module.exports = SmitCollaborationSchema;
