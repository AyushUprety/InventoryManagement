const dotenv = require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const bodyparser = require("body-parser"); // It will convert any request from front end to object
const cors = require("cors");

const app = express();

app.use(express.json());
app.use(bodyparser.json());
app.use(express.urlencoded({ extended: false }));

const PORT = process.env.PORT || 5000;
// Setting up the routes
// Home route
app.get("/", (req, res) => {
  res.send("Hi there");
});
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log("Server is running on port 5000");
    });
  })
  .catch((err) => console.log(err));
