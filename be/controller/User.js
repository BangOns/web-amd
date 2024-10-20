const { validationResult } = require("express-validator");
const { User } = require("../schema/dbSchema");
const { Response } = require("../utils/response");

async function GetUserAll(req, res) {
  const data = await User.find({});
  return Response(200, data, "get user all success", res);
}
async function LoginUser(req, res) {
  const data = await User.find({ idUser: req.body.idUser });
  if (!data.length) {
    return Response(400, {}, "invalid idUser or password", res);
  } else {
    return Response(200, data, "user logged", res);
  }
}
async function AddUser(req, res) {
  const validateNewUser = validationResult(req);
  if (!validateNewUser.isEmpty()) {
    return Response(
      400,
      {},
      validateNewUser
        .array()
        .map((x) => x.msg)
        .toString(),
      res
    );
  } else {
    await User.create(req.body);
    const data = await User.find({});
    return Response(200, data, "user created", res);
  }
}

module.exports = { GetUserAll, AddUser, LoginUser };
