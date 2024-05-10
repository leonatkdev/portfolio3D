const mongoose = require("mongoose");
const {Buffer} = require("buffer");

const { Schema } = mongoose;

const AuthorSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  avatar: {
    type: Buffer,
    required: true,
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
