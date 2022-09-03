const { generalSelect } = require("../utils/selects");
require("dotenv").config();

const getData = async (req, res) => {
  if (req.headers.authorization !== process.env.AUTHORIZATION_KEY) {
    res.send({ success: false, msg: "access denied" });
  } else {
    const files = await generalSelect("files");
    res.send({ files });
  }
};

module.exports = getData;
