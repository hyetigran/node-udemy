module.exports = (req, res, next) => {
  if (!req.session.isLoggineIn) {
    return res.redirect("/login");
  }
  next();
};
