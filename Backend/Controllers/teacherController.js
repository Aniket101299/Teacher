const express = require("express");

const router = express.Router();

const Teacher = require("../Models/teachermodel");

// ----------------------------- TEACHER CRUD -----------------------------------
router.get("", async (req, res) => {
    try {
      const teacher = await Teacher.find()
        .lean()
        .exec();
  
      return res.send(teacher);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const teacher = await Teacher.create(req.body);
  
      return res.send(teacher);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/teachers/:id", async (req, res) => {
    try {
      const teacher = await Teacher.findById(req.params.id).lean().exec();
  
      return res.send(teacher);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.patch("/teachers/:id", async (req, res) => {
    try {
      const teacher = await Teacher.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(teacher);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.delete("/teachers/:id", async (req, res) => {
    try {
      const teacher = await Teacher.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(teacher);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  
  module.exports = router;