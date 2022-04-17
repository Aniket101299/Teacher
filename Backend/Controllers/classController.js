const express = require("express");

const router = express.Router();

const Class = require("../Models/classmodel");

// ----------------------------- TEACHER CRUD -----------------------------------
router.get("", async (req, res) => {
    try {
      const classes = await Class.find()
        .populate({ path: "teacher_id", select: "name" })
        .lean()
        .exec();
  
      return res.send(classes);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const classes = await Class.create(req.body);
  
      return res.send(classes);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/class/:id", async (req, res) => {
    try {
      const classes = await Class.findById(req.params.id).lean().exec();
  
      return res.send(classes);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.patch("/class/:id", async (req, res) => {
    try {
      const classes = await Class.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(classes);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.delete("/class/:id", async (req, res) => {
    try {
      const classes = await Class.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(classes);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  
  module.exports = router;