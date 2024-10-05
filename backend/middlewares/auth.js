const checkUser = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.status(401).json({ error: true, message: "Unauthorized" });
};

module.exports = { checkUser };
