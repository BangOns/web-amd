const { GetUserAll, AddUser, LoginUser } = require("../controller/User");
const { VerifyToken, VerifyRefreshToken } = require("../utils/jwtService");
const { validateUserAdd } = require("../utils/validateUser");
const router = require("express").Router();

router.get("/user", VerifyToken, GetUserAll);
router.post("/user/login", LoginUser);
router.post("/user/register", validateUserAdd(), AddUser);
//
router.post("/refreshtoken", VerifyRefreshToken);
module.exports = router;
