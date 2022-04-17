const mongoose = require("mongoose");

// step 1 :- connect to mongodb
const connect = () => {
    return mongoose.connect(
      "mongodb+srv://Aniket:Aniket_1029@cluster0.jh1in.mongodb.net/myFirstDatabase?authSource=admin&replicaSet=atlas-sq8dvu-shard-0&w=majority&readPreference=primary&retryWrites=true&ssl=true"
    );
  };

module.exports = connect;