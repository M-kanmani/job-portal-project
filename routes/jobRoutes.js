const express = require("express");
const router = express.Router();

const Job = require("../models/Job");

router.get("/", async (req, res) => {
  const jobs = await Job.find();
  res.json(jobs);
});

router.get("/addsample", async (req, res) => {

  const jobs = await Job.insertMany([
    {
      title: "Software Developer",
      company: "ABC Tech",
      location: "Chennai",
      salary: "50000"
    },
    {
      title: "Data Analyst",
      company: "Infosys",
      location: "Bangalore",
      salary: "60000"
    },
    {
      title: "Web Designer",
      company: "TCS",
      location: "Coimbatore",
      salary: "45000"
    }
  ]);

  res.json(jobs);

});

router.post("/", async (req, res) => {
  const job = await Job.create(req.body);
  res.json(job);
});

router.delete("/:id", async (req, res) => {

  try {

    await Job.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message: "Job Deleted Successfully"
    });

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

});

module.exports = router;