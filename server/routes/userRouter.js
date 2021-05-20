const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/user.model");

router.post("/register", async (req, res) => {
  try {
    let { name, email, password,skills, passwordCheck, profilePic, description } =
      req.body;


    if (!email || !password || !passwordCheck)
      return res.status(400).json({ msg: "Not all fields have been entered." });
    if (password.length < 5)
      return res
        .status(400)
        .json({ msg: "The password needs to be at least 5 characters long." });
    if (password !== passwordCheck)
      return res
        .status(400)
        .json({ msg: "Enter the same password twice for verification." });

    const existingUser = await User.findOne({ email: email });
    if (existingUser)
      return res
        .status(400)
        .json({ msg: "An account with this email already exists." });

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      skills,
      name,
      profilePic,
      description,
    });
    const savedUser = await newUser.save();
    res.json(savedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    console.log(email);
    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    let user = await User.findOne({ email: email });
    if (!user)
      return res
        .status(400)
        .json({ msg: "No account with this email has been registered." });

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).json({ msg: "Invalid credentials." });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);
    res.json({
      token,
      user: {
        id: user._id,
        displayName: user.displayName,
      },
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.delete("/delete", auth, async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.user);
    res.json(deletedUser);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.post("/tokenIsValid", async (req, res) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) return res.json(false);

    const verified = jwt.verify(token, process.env.JWT_SECRET);
    if (!verified) return res.json(false);

    const user = await User.findById(verified.id);
    if (!user) return res.json(false);

    return res.json(true);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

router.get("/", auth, async (req, res) => {
  let user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

//**** update account details ****//
router.post("/update/:id", async (req, res) => {
  try {
    await User.findById(req.params.id).then((user) => {
      user.name = req.body.name;
      user.skills=req.body.skills,
      user.description = req.body.description;
      user.profilePic = req.body.profilePic;
      user
        .save()
        .then(() => res.status(200).json({ msg: "User Account Updated!" }))
        .catch((err) => res.status(400).json({ error: err.message }));
    });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

// router.route("/update").post(function (req, res) {
//   let user = new User(req.body);
//   user
//     .updateOne(
//       { email: user.email },
//       {
//         $set: {
//           name: user.name,
//           profilePic: user.profilePic,
//           password: user.password,
//         },
//       }
//     )
//     .then((sup) => {
//       res.status(200).json({ userUpdate: "successful" });
//     })
//     .catch((err) => {
//       res.status(400).send("User Update Failed!");
//     });
// });

router.route("/passwordReset/:email/:password").get(function (req, res) {
  let email = req.params.email;
  let password = req.params.password;
  User.find({ email: email })
    .exec()
    .then((item) => {
      if (!item == "") {
        User.updateOne({ email: email }, { $set: { password: password } })
          .then((sup) => {
            res.status(200).json({ passwordReset: "successful" });
          })
          .catch((err) => {
            res.status(400).json(err);
          });
      } else {
        res.status(404).json({ message: "Email not found" });
      }
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

router.route("/getDetails").get(function (req, res) {
  User.find({})
    .exec()
    .then((item) => {
      res.status(200).json(item);
    })
    .catch((err) => {
      res.status(500).json(err);
    });
});

//*** get user by id ***//
router.get("/get-user/:id", async (req, res) => {
  try {
    let id = req.params.id;

    await User.find({ _id: id }).exec().
    then((user) => {
      res.json(user);
    })
        .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

//*** get user skills by id ***//
router.get("/getSkills/:id", async (req, res) => {
  try {
    let id = req.params.id;

    await User.find({ _id: id } ,{ skills: 1,_id:0 }).exec().
    then((user) => {
      res.json(user);
    })
        .catch((err) => res.status(400).json("Error : " + err));
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});
module.exports = router;
