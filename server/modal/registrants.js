const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  fullname: String,
  nameoffirm: String,
  businesscategory: String,
  phonenumber: Number,
  address: String,
  landmark: String,
  pincode: Number,
  location: String,
  joiningdate: Date,
  profilepic: String,
  description: String,
});

const UserModel = mongoose.model("user", UserSchema);

module.exports = UserModel;
