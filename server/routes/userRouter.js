const router = require("express").Router();
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const auth = require("../middleware/auth");
const User = require("../models/userModel");
const mailgun = require("mailgun-js");
const DOMAIN = "sandbox02d5a0aaf338490abb42fd03732c7761.mailgun.org";
const mg = mailgun({ apiKey: process.env.MAILGUN_APIKEY, domain: DOMAIN });
const _ = require("lodash");


router.post("/register", async (req, res) => {
  try {
    let { email, password, passwordCheck, displayName } = req.body;

    // validate

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

    if (!displayName) displayName = email;

    const salt = await bcrypt.genSalt();
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = new User({
      email,
      password: passwordHash,
      displayName,
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

    // validate
    if (!email || !password)
      return res.status(400).json({ msg: "Not all fields have been entered." });

    const user = await User.findOne({ email: email });
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
  const user = await User.findById(req.user);
  res.json({
    displayName: user.displayName,
    id: user._id,
  });
});

router.put("/forgot-password", async (req, res) => {
  const { email } = req.body;

  User.findOne({ email }, (err, user) => {
    if (err || !user) {
      return res
        .status(400)
        .json({ msg: "User with this email does not exists." });
    }

    const token = jwt.sign(
      { _id: user._id },
      process.env.RESET_PASSWORD_KEY,
      { expiresIn: "20m" }
    );
    const data = {
      from: "anushikanethsaraanuk@gmail.com",
      to: email,
      subject: "Password Reset Link",
      html: `
      <h2> Please click on the given link to reset your passsword</h2>
      <p>${process.env.CLIENT_URL}/new-password/${token}</p>`,
    };

    return user.updateOne({ resetLink: token }, function (err, success) {
      if (err) {
        return res.status(400).json({ error: "reset password link error" });
      } else {
        mg.messages().send(data, function (error, body) {
          if (error) {
            console.log("145 line: "+error);
            return res.status(500).json({ error: error.message });
          }
          return res.json({
            message: "Email has been sent, kindly follow the instructions",
          });
        });
      }
    });
  });
});



router.put("/reset-password", async (req, res) => {
  const {resetLink,newPassword} = req.body;
  // console.log("link: "+resetLink);
  // console.log("password: " + newPassword);

  const salt = await bcrypt.genSalt();
  const passwordHash = await bcrypt.hash(newPassword, salt);

  if(resetLink){
    jwt.verify(resetLink,process.env.RESET_PASSWORD_KEY,function(error,decodeData){
      if(error){
        return res.status(401).json({
          error:"Incorrect token or it is expired"
        })
      }
      
      User.findOne({resetLink},(err,user)=>{
        if (err || !user) {
          return res
            .status(400)
            .json({ error: "User with this email does not exists." });
        }
        
        const obj = {
          password: passwordHash,
          resetLink: "",
        };

        //update the database
        user=_.extend(user,obj);
        user.save((err,result)=>{
          if (err) {
            return res.status(400).json({ error: "reset password link error" });
          } else {
            return res.status(200).json({ error: "Your password has been changed" });
          }

        })

      })
    })

  }else{
      return res
        .status(401)
        .json({ msg: "Authentication error!" });
    
  }
  
});


module.exports = router;
