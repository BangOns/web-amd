const { validationResult } = require("express-validator");
const { User } = require("../schema/dbSchema");
const { Response } = require("../utils/response");
const { GenerateToken, GenerateRefreshToken } = require("../utils/jwtService");

async function GetUserAll(req, res) {
  const data = await User.find({});
  return Response(200, data, "get user all success", res);
}
async function LoginUser(req, res) {
  const data = await User.find({ idUser: req.body.idUser });
  if (!data.length) {
    return Response(400, {}, "invalid idUser or password", res);
  } else {
    const token = GenerateToken(req);
    const refreshToken = GenerateRefreshToken(req);
    const dataUser = { ...data, token, refreshToken };
    return Response(200, dataUser, "user logged", res);
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
    const dataUserNew = {
      idUser: req.body.idUser,
      password: req.body.password,
      name: req.body.name,
      imgProfile: req.body?.imgProfile || "",
      role: req.body?.role || "user",
    };
    await User.create(dataUserNew);
    const data = await User.find({});
    return Response(200, data, "user created", res);
  }
}

module.exports = { GetUserAll, AddUser, LoginUser };
