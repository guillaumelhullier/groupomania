const mongoose = require("mongoose");

mongoose
  .connect(
    "mongodb+srv://guillaume:particule@cluster0.zzzxaan.mongodb.net/groupomania",
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: false,
    }
  )
  .then(() => console.log("Connected to MongoDb"))
  .catch((err) => console.log("Failed to connect to MongoDb", err));
