const jwt = require("jsonwebtoken");

const verifyToken = async (ctx, next) => {
  const token = ctx.headers.authorization;
  if (!token) {
    ctx.status = 401;
    ctx.body = { error: "Unauthorized: No token provided" };
    return;
  }

  try {
    const decoded = jwt.verify(token, "jwtSecsadfsdgafagasdfasret");
    console.log(decoded)
    // ctx.state.user = decoded;
    await next();
  } catch (err) {
    ctx.status = 401;
    ctx.body = { error: "Unauthorized: Invalid token" };
  }
};

module.exports = verifyToken;
