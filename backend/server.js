//Import
const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();

const indexRoute = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//Route test
app.use("/", indexRoute);

//User Routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

//Server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
