const router = require("express").Router();
const { User } = require("../schema/dbSchema");
const { Response } = require("../utils/response");
router.get("/user", async (req, res) => {
  const data = await User.find({});
  return Response(200, data, "user created", res);
});
router.post("/user", async (req, res) => {
  const { idUser, password, imgProfile } = req.body;
  const userPost = await User.create(req.body);
  const data = await User.find({});
  return Response(200, data, "user created", res);
});

module.exports = router;
