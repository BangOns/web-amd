const { body } = require("express-validator");
const { User } = require("../schema/dbSchema");

function validateUserAdd() {
  const Regex = /^(?=(.*[A-Za-z]){3})(?=(.*[0-9]){3})[A-Za-z0-9]{6}$/;
  return body("idUser")
    .isLength({ min: 6, max: 6 })
    .custom(async (value) => {
      const data = await User.findOne({ idUser: value });
      if (data) {
        throw new Error("user already exist ");
      }
      if (!Regex.test(value)) {
        throw new Error("invalid idUser");
      }
      return true;
    });
}

module.exports = { validateUserAdd };
