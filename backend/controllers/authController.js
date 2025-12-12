const User = require("../models/user");
const bcrypt = require("bcryptjs");
const generateToken = require("../utils/generateToken");

// REGISTER USER
exports.registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const exists = await User.findOne({ email });
    if (exists) return res.status(400).json({ message: "User already exists" });

    const hashedPass = await bcrypt.hash(password, 10);

    const user = await User.create({ name, email, password: hashedPass });

    res.status(201).json({
      message: "Registration successful",
      user
    });
  } catch (error) {
    res.status(500).json({ message: "Register Error", error });
  }
};

// LOGIN USER
exports.loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({ message: "User not found" });

    const match = await bcrypt.compare(password, user.password);
    if (!match)
      return res.status(400).json({ message: "Incorrect Password" });

    const token = generateToken(user._id);

    res.json({
      message: "Login Success",
      token
    });
  } catch (error) {
    res.status(500).json({ message: "Login Error", error });
  }
};
