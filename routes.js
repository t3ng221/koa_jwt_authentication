// routes.js

const Router = require("koa-router");
const controller = require("./controller");
const verifyToken = require("./middleware/jwtTokenVerify");

const router = new Router();

router.get("/", controller.getHello);
router.post("/create-jsonwebtoken", controller.createJsonwebtoken);
router.get("/verify-jsonwebtoken", verifyToken, controller.VerifyJsonwebtoken);

module.exports = router;
