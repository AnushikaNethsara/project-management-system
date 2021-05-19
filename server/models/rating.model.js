const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
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
  review: { type: String, required: true },
  rating: { type: Number, required: true },
});

module.exports = Rating = mongoose.model("rating", ratingSchema);
