const { userModel } = require("../models/userSchema");

const getUser = (req, res) => {
  if (req.user) {
    return res
      .status(200)
      .json({ error: false, message: { username: req.user.userName } });
  } else {
    res.status(401).json({ message: "Unauthorized" });
  }
};

module.exports = {
  getUser,
};

module.exports = { getUser };
