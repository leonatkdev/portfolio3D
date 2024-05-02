const express = require("express");
const router = express.Router();

const { adminAuth } = require("../middleware/auth");
const { register, login, deleteUser, update, getUsers } = require("../auth");

// Public Routes
router.post("/register", register);
router.post("/login", login);

//Should Protected Routes
router.get("/users", getUsers );


// Admin-Protected Routes
router.delete("/deleteUser", adminAuth, deleteUser);
router.put("/update", adminAuth, update);

module.exports = router;
