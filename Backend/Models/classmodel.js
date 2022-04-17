const mongoose = require("mongoose");



// step 2 - Schema
const classSchema = new mongoose.Schema(
    {
      grade: { type: Number, required: true },
      section: { type: String, required: true },
      subject: { type: String, required: true },
      teacher_id: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Teacher",
        required: true,
      },
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // step 3 - Model
  const Class = mongoose.model("Class", classSchema); 

  module.exports = Class;