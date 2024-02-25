// routes/auth.js

const express = require("express");
const router = express.Router();

// Import Auth Controller
const authController = require("../controllers/auth");

// Register Route
router.post("/register", authController.register);

// Login Route
router.post("/login", authController.login);

module.exports = router;
