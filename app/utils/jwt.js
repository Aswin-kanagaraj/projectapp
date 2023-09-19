const sendToken = (user, statusCode, res, req) => {
  const accessToken = user.getJwtToken();
  const refreshToken = user.getRefreshToken();
  const tokenOptions = {
    expires: new Date(
      Date.now() + process.env.COOKIE_EXPIRES_TIME * 24 * 60 * 60 * 1000
    ),
  };
  const response = {
    success: true,
    session_id: req.session.id,
    token: { accessToken, refreshToken },
    user: {
      id: req.session.userId,
      role: user.userrole,
    },
  };
  const tokenCookieValue = accessToken;
  res
    .status(statusCode)
    .cookie("token", tokenCookieValue, tokenOptions)
    .json(response);
};

module.exports = sendToken;
