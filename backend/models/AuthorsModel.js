const mongoose = require("mongoose");
const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: String,
    required: true, // Ensure this is a string to store the file path
  },
  email: {
    type: String,
  },
  bio: {
    type: String,
  },
  website: {
    type: String,
  },
  social: {
    type: String,
  },
});

const AuthorModel = mongoose.model("AuthorModel", AuthorSchema);

module.exports = AuthorModel;
