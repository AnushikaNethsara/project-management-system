const mongoose = require("mongoose");

const ratingSchema = new mongoose.Schema({
  user_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  // project_id: {
  //   type: mongoose.Schema.Types.ObjectId,
  //   ref: "project",
  // },
  review: { type: String, required: true },
  rating: { type: Number, required: true },
});

module.exports = Rating = mongoose.model("rating", ratingSchema);
