const mongoose = require("mongoose");


// step 2 :- create a schema
const teacherSchema = new mongoose.Schema(
    {
      name: { type: String, required: true },
      age: { type: Number, required: true },
      gender: { type: String, required: false, default: "Male" }
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // step 3 :- create a model
  const Teacher = mongoose.model("Teacher", teacherSchema); 

  module.exports = Teacher;