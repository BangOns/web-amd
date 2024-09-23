const { Schema, model } = require("mongoose");

const userSchema = new Schema({
  idUser: String,
  name: String,
  password: String,
  imgProfile: String,
});

const User = model("User", userSchema);
module.exports = { User };
