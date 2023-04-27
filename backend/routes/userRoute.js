const express = require("express");
const router = express.Router();
// const { registerUser } = require("../controllers/userController");

// Define routes using router

router.post("/register", (req, res) => {
  res.send("usercreated");
});

module.exports = router;
