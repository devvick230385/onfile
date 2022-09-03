const db = require("../utils/dbConnection");
const { specificSelect } = require("../utils/selects");
require("dotenv").config();
const login = async (req, res) => {
  const data = req.body;
  if (req.headers.authorization !== process.env.AUTHORIZATION_KEY) {
    res.send({ success: false, msg: "access denied" });
  } else {
    const query = `SELECT * FROM users WHERE userName = '${data.userIdentifier}' OR email = '${data.userIdentifier}'`;
    db.query(query, async (err, result) => {
      if (result.length) {
        const checkPassword = await specificSelect(
          "users",
          "password",
          data.password
        );
        if (checkPassword.length) {
          res.send({ success: true, data: checkPassword });
        } else {
          res.send({ success: false, msg: "Incorrect credentials" });
        }
      } else {
        res.send({ success: false, msg: "Incorrect credentials" });
      }
    });
  }
};

module.exports = login;
