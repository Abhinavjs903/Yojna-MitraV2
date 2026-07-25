const express = require("express");
const router = express.Router();

const {
  signup,
  login,
  googleLogin,
  logout,
} = require("../controllers/authController");

// Normal authentication
router.post("/signup", signup);
router.post("/login", login);

// Google Authentication
router.post("/google", googleLogin);

// Logout
router.post("/logout", logout);

module.exports = router;