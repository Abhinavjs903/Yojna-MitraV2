// ===============================
// Authentication Controller
// (Database integration will be added later)
// ===============================

// User Signup
const signup = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "Please provide all required fields.",
      });
    }

    // TODO:
    // Check if user already exists in MongoDB
    // Hash password
    // Save user

    return res.status(201).json({
      success: true,
      message: "Signup endpoint working.",
      data: {
        name,
        email,
      },
    });
  } catch (error) {
    console.error("Signup Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// User Login
const login = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password are required.",
      });
    }

    // TODO:
    // Verify user from MongoDB
    // Compare password
    // Generate JWT

    return res.status(200).json({
      success: true,
      message: "Login endpoint working.",
      data: {
        email,
      },
    });
  } catch (error) {
    console.error("Login Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Google Login
const googleLogin = async (req, res) => {
  try {
    // Google OAuth verification will be added later

    return res.status(200).json({
      success: true,
      message: "Google Authentication endpoint working.",
    });
  } catch (error) {
    console.error("Google Login Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

// Logout
const logout = async (req, res) => {
  try {
    // JWT blacklist/session removal can be added later

    return res.status(200).json({
      success: true,
      message: "Logged out successfully.",
    });
  } catch (error) {
    console.error("Logout Error:", error);

    res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};

module.exports = {
  signup,
  login,
  googleLogin,
  logout,
};