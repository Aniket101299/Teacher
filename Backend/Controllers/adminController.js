const express = require("express");


const router = express.Router();

const Admin = require("../Models/adminmodel");

// ----------------------------- TEACHER CRUD -----------------------------------
router.get("", async (req, res) => {
    try {
      const admin = await Admin.find()
        .lean()
        .exec();
  
      return res.send(admin);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.post("", async (req, res) => {
    try {
      const admin = await Admin.create(req.body);
  
      return res.send(admin);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.get("/admins/:id", async (req, res) => {
    try {
      const admin = await Admin.findById(req.params.id).lean().exec();
  
      return res.send(admin);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.patch("/admins/:id", async (req, res) => {
    try {
      const admin = await Admin.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
      });
  
      return res.send(admin);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  router.delete("/admins/:id", async (req, res) => {
    try {
      const admin = await Admin.findByIdAndDelete(req.params.id).lean().exec();
  
      return res.send(admin);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  
  module.exports = router;
  