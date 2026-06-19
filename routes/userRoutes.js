const express = require("express");
const router = express.Router();

const User = require("../models/User");

router.post("/register", async (req, res) => {

  try {

    const user = await User.create({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    });

    res.json(user);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;
router.post("/login", async (req, res) => {

  const { email, password } = req.body;

  const user = await User.findOne({ email });

  if (!user) {
    return res.status(404).json({
      message: "User Not Found"
    });
  }

  if (user.password !== password) {
    return res.status(401).json({
      message: "Invalid Password"
    });
  }

  res.json({
    message: "Login Successful",
    user
  });

});