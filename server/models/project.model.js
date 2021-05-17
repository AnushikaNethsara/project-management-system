const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  price: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = Project = mongoose.model("project", projectSchema);
