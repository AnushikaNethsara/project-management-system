const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
  seller_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:true
  },
  buyer_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
    required:true
  },
  price: { type: Number, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
});

module.exports = Project = mongoose.model("project", projectSchema);
