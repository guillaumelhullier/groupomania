const express = require("express");
require("dotenv").config({ path: "./config/.env" });
const app = express();

const indexRoute = require("./routes/index");

//Route test
app.use("/", indexRoute);

//Server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
