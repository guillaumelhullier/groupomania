const express = require("express");
const bodyParser = require('body-parser');
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const app = express();


const indexRoute = require("./routes/index");
const userRoutes = require('./routes/user.routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:true}));

//Route test
app.use("/", indexRoute);

//Routes
app.use('/api/user', userRoutes);


//Server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
