const router = require("express").Router();
const Rating = require("../models/rating.model");

//*** add rating ****//
router.post("/add", async (req, res) => {
  try {
    let { seller_id,buyer_id,project_id,review,rating } = req.body;
    const newRating = new Rating({
      seller_id,
      buyer_id,
      review,
      rating,
    });

    const savedRating = await newRating.save();
    res.json(savedRating);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//***get seller reviews****//

router.get("/sellerReview/:id", async (req, res) => {
  const id = req.params.id;
  await Rating.find({ seller_id: id })
    .populate("seller_id").populate("buyer_id")
    .exec()
    .then((comment) => {
      if (comment) {
        res.status(200).json(comment);
      } else {
        res.status(404).json({ message: "not found" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//***get buyer reviews****//

router.get("/buyerReview/:id", async (req, res) => {
  const id = req.params.id;
  await Rating.find({ buyer_id: id })
      .populate("seller_id").populate("buyer_id")
      .exec()
      .then((comment) => {
        if (comment) {
          res.status(200).json(comment);
        } else {
          res.status(404).json({ message: "not found" });
        }
      })
      .catch((err) => {
        res.status(500).json(err);
      });
});


module.exports = router;
