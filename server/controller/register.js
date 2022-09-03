const { specificSelect } = require("../utils/selects");
const insert = require("../utils/insert");
require("dotenv").config();
const uuid = require("uuid");
const register = async (req, res) => {
  const data = req.body;

  if (req.headers.authorization !== process.env.AUTHORIZATION_KEY) {
    res.send({ success: false, msg: "access denied" });
  } else {
    const exists = await specificSelect("users", "email", data.email);
    if (exists.length) {
      res.send({ success: false, msg: "User already exists" });
    } else {
      const id = uuid.v4();
      const inserted = insert("users", { ...data, id });
      if (inserted) {
        res.send({ success: true });
      }
    }
  }
};

module.exports = register;
