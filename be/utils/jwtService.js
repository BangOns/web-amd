const jwt = require("jsonwebtoken");
const { Response } = require("./response");
function GenerateToken(req) {
  const token = jwt.sign({ id: req.body.idUser }, process.env.SECRET_KEY, {
    expiresIn: "1m",
  });
  return token;
}
function GenerateRefreshToken(req) {
  const token = jwt.sign({ id: req.body.idUser }, process.env.REFRESH_KEY, {
    expiresIn: "7d",
    audience: req.body.idUser,
  });
  return token;
}

function VerifyToken(req, res, next) {
  const { authorization } = req.headers;
  if (!authorization) {
    return Response(403, {}, "Token Diperlukan", res);
  }

  const token = authorization.split(" ")[1];
  if (!token) {
    return Response(401, {}, "Token Diperlukan", res);
  }

  jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
    if (err) {
      return Response(401, {}, "invalid token", res);
    }
    req.body.idUser = decoded.id;
  });
  next();
}
function VerifyRefreshToken(req, res, next) {
  const refreshToken = req.headers.cookie.split("=")[1];
  if (!refreshToken) {
    return res.status(403).json({ message: "Refresh token missing" });
  }

  jwt.verify(refreshToken, process.env.REFRESH_KEY, (err, decoded) => {
    if (err) {
      return Response(401, {}, "Invalid Refresh Token", res);
    }
    const token = GenerateToken(req);
    const refreshToken = GenerateRefreshToken(req);
    const dataUser = { ...decoded, token, refreshToken };
    return Response(200, dataUser, "Refresh Token Succes", res);
  });
}
module.exports = {
  GenerateToken,
  GenerateRefreshToken,
  VerifyToken,
  VerifyRefreshToken,
};
