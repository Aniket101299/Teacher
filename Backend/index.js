const express = require("express");
// step 1 :- connect to mongodb
const connect = require("./config/config");


const adminController = require("./Controllers/adminController");
const classController = require("./Controllers/classController");
const teacherController = require("./Controllers/teacherController");


const app = express();
app.use(express.json());


app.use("/admins",adminController);
app.use("/teachers",teacherController);
app.use("/class",classController);


/*
  work with posts collection
  GET => get /posts
  POST => post /posts
  GET SINGLE ITEM => get /posts/:id
  UPDATE SINGLE ITEM => patch /posts/:id
  DELETE SINGLE ITEM => delete /posts/:id
*/



app.listen(4545, async function () {
  try {
    await connect();
    console.log("listening on port 4545");
  } catch (e) {
    console.log(e.message);
  }
});






// app.get("/user", logger1("admin"), (req, res) => {
//   res.send(req.role);
// });

// function logger1(role) {
//   return function (req, res, next) {
//     if (role == "admin") {
//       req.role = "admin";
//     } else {
//       req.role = "user";
//     }
//     next();
//   };
// }




