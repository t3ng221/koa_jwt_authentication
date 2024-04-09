// controller.js
const jwt = require("jsonwebtoken");
exports.getHello = async (ctx) => {
  ctx.body = "Hello, Koa!";
};

const generateJWTToken = (data) => {
  const dataObj = {
    email: data.email,
    role: "admin",
    password: data.password,
  };
  const token = jwt.sign(dataObj, "jwtSecsadfsdgafagasdfasret", {
    expiresIn: "1d",
  });
  return token;
};

exports.createJsonwebtoken = async (ctx) => {
  try {
    const { email, password } = ctx.request.body;
    const token = generateJWTToken({ email, password });
    ctx.status = 200;
    ctx.body = { email, token };
  } catch (err) {
    console.error(err);
  }
};

exports.VerifyJsonwebtoken = async (ctx) => {
  try {
    ctx.status = 200;
    ctx.body = { message: "Token Verified" };
  } catch (err) {
    console.error(err);
  }
};
