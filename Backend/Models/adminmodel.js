const mongoose = require("mongoose");


// step 2 - Schema
const adminSchema = new mongoose.Schema(
    {
      username: { type: String, required: true },
      password: { type: String, required: true }
    },
    {
      versionKey: false, // removed __v
      timestamps: true, // createdAt, updatedAt
    }
  );
  
  // step 3 - Model
  const Admin = mongoose.model("Admin", adminSchema); 

  module.exports = Admin;