const mongoose = require("mongoose");
const AuthorSchema = new mongoose.Schema(
  {
    fullname: { type: String },
  },
  { timestamps: true }
);
module.exports.Author = mongoose.model("Author", AuthorSchema);