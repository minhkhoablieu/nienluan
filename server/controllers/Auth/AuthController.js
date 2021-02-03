const mongoose = require("mongoose");
const User = require("../../models/User");
const jwt = require("jsonwebtoken");

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.login(email, password);
    const token = jwt.sign(
      {
        email: user.email,
        userId: user.id,
      },
      process.env.REFRESH_TOKEN_SECRET,
      {
        expiresIn: "1h",
      }
    );
    res.status(200).json({
      message: "Auth successful",
      token: token,
    });
  } catch (err) {
    res.status(400).json({
      message: err,
    });
  }
};
