const express = require("express");
const router = express.Router();

const Application =
require("../models/Application");

router.post("/apply", async (req, res) => {

  try {

    const application =
    await Application.create({
      userEmail: req.body.userEmail,
      jobTitle: req.body.jobTitle,
      company: req.body.company
    });

    res.json(application);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

router.get("/", async (req, res) => {

  const applications =
  await Application.find();

  res.json(applications);

});

module.exports = router;