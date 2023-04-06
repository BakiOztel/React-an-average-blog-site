const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const token = req.cookies.x;
  if (token) {
    jwt.verify(token, process.env.JWT_KEY, (error, decodedToken) => {
      if (error) next([401, "Invalid token"]);
      else {
        req.decodedToken = decodedToken;
        req.token = token;
        next();
      }
    });
  } else {
    res.status(400);
    next([400, "Token is missing"]);
  }
}
