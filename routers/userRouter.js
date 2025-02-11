const express = require("express");
const { registerUser, loginUser, allUsers } = require("../controller/userController");

const router = express.Router();

// @route POST /register
// @desc Register a new user
// @access Public
router.post("/register", registerUser);

// @route GET /login
// @desc Log in an existing user
// @access Public
router.get("/login", loginUser);

router.get("/", allUsers)

// Export the router to be used in the application
module.exports = router;
