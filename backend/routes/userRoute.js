const express = require("express");
const router = express.Router();
const { registerUser } = require("../controllers/userController");

// Define routes using router

router.post("/register", registerUser);

module.exports = router;
