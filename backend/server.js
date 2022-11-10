//Import
const express = require("express");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
require("dotenv").config({ path: "./config/.env" });
require("./config/db");
const { checkUser, requireAuth } = require("./middleware/auth.middleware");
const cors = require("cors");
const app = express();

// Connection Client

const corsOptions = {
  origin: process.env.CLIENT_URL,
  credentials: true,
  'allowHeaders': ["sessionId", "Content-Type"],
  'exposeHeaders': ["sessionId"],
  'methods': "GET,HEAD,PUT,PATCH,POST,DELETE",
  'prefLightContinue': false,
};

app.use(cors(corsOptions));

const indexRoute = require("./routes/index");
const userRoutes = require("./routes/user.routes");
const postRoutes = require("./routes/post.routes");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cookieParser());

//jwt
app.get("*", checkUser);

//Route test
app.use("/", indexRoute);
app.get("/jwtid", requireAuth, (req, res) => {
  res.status(200).send(res.locals.user._id);
});

//User Routes
app.use("/api/user", userRoutes);
app.use("/api/post", postRoutes);

//Server
app.listen(process.env.PORT, () => {
  console.log(`Listening on port ${process.env.PORT}`);
});
