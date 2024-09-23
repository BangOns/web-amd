const express = require("express");
const cors = require("cors");
const app = express();
require("./schema/dbSchema");
require("./connect/db");
const router = require("./router/route");
require("dotenv").config();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
const port = process.env.PORT || 3000;
app.use(router);
app.use("/", (req, res) => {
  res.status(404).send("page not found");
});
app.listen(port, () => {
  console.log(`Server is running on port http://localhost:${port}`);
});
