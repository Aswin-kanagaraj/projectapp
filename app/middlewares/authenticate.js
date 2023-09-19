const Users = require("../models/user.model");
const catchAsyncError = require("./catchAsyncError");
const jwt = require("jsonwebtoken");

exports.isAuthenticatedUser = catchAsyncError(async (req, res, next) => {
  const { token } = req.cookies;
  if (!token) {
    return res.status(401).json({err:"Unauthorized"})
  }
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  req.user = await Users.findById(decoded.id);
  next();
});

exports.authorizeRoles = (...roles) => {
  return (req, res, next) => {
    if (!roles.includes(req.user.role)) {
      return next(
        new res.status(401).json({err:`Unauthorized for this role ${req.user.role}`})
      );
    }
    next();
  };
};
