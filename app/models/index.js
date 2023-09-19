const dbConfig = require("../config/db.config.js");
const mongoose = require("mongoose");
mongoose.Promise = global.Promise;
const db = {};
db.mongoose = mongoose;
db.url = dbConfig.url; 
db.blogFile = require("./blogFile.js")(mongoose);
db.login = require("./user.model.js")(mongoose);