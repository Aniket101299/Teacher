const express = require("express");

const router = express.Router();

const Teacher = require("../Models/teachermodel");

// ----------------------------- TEACHER CRUD -----------------------------------


router.get("/teachers", async (req, res) => {
    try {
      let value;
      let filter = {};
      if(req.query.gender) {
        filter.gender = req.query.gender;
      } 
      if(filter == {}) {
        value = await Teacher.find().lean().exec();
      } else {
        value = await Teacher.find(filter).lean().exec();
      }
      
      return res.send(value);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });



  router.get("/teachers/ageasc", async (req, res) => {
    try {
      const age = await Teacher.find().sort({age:1}).lean().exec();
  
      return res.send(age);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });
  


  router.get("/teachers/agedec", async (req, res) => {
    try {
      const age = await Teacher.find().sort({age:-1}).lean().exec();
  
      return res.send(age);
    } catch (err) {
      return res.status(500).send(err.message);
    }
  });







// router.get("", async (req, res) => {
//     try {
//       const teacher = await Teacher.find()
//         .lean()
//         .exec();
  
//       return res.send(teacher);
//     } catch (err) {
//       return res.status(500).send(err.message);
//     }
//   });
  
  router.post("/teachers", async (req, res) => {
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