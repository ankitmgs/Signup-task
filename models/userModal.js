const mongoose = require("../connection");

const schema = mongoose.Schema({
  name: String,
  email: String,
  phone: Number,
  linkedin: String,
  country: String,
  state: String,
  city: String,
  pincode: Number,
  created: { type: Date, default: new Date() },
});

const model = mongoose.model("users", schema);

module.exports = model;
