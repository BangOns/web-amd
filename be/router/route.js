const { GetUserAll, AddUser, LoginUser } = require("../controller/User");
const { validateUserAdd } = require("../utils/validateUser");
const router = require("express").Router();

router.get("/user", GetUserAll);
router.post("/user", LoginUser);
router.post("/user/add", validateUserAdd(), AddUser);

module.exports = router;
