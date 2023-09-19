const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const path = require("path");
dotenv.config({ path: path.join(__dirname, "config/config.env") });
const cors = require("cors");
const cookieParser = require("cookie-parser");
const session = require("express-session");
const MongoStore = require("connect-mongo");
const dbConfig = require("./config/db.config");
const app = express();
const port = 5000;


const sessionStore = new MongoStore({
  mongoUrl: dbConfig.url,
  collection: "sessions",
});
app.use(
  session({
    resave: false,
    saveUninitialized: false,
    secret: "basbhbfjkbhvkeyhbjhvjkehbfbsjf123423452#$$^#%^$&^% ",
    cookie: {
      sameSite: "strict",
      expires: new Date(Date.now() + 1 * 24 * 60 * 60 * 1000),
    },
    rolling: true,
    store: sessionStore,
  })
  );
  var corsOptions = {
    origin: "*",
    methods: ["GET", "POST", "PUT", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    maxAge: 86400,
  };
  app.use(cors(corsOptions, { origin: true, credentials: true }));
  
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); // parse requests of content-type - application/x-www-form-urlencoded
  app.use(cookieParser());
require("./routes/auth.routes")(app);
require("./routes/fileRoutes")(app);

mongoose
  .connect(dbConfig.url, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Connected to the database!");
  })
  .catch((err) => {
    console.log("Cannot connect to the database!", err);
    process.exit();
  });
app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});
