const mongoose = require("mongoose");
require("dotenv").config();
const uri = `${process.env.URL_DB}/${process.env.DB_NAME}`;
mongoose.connect(uri);
