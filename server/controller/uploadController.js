require("dotenv").config();
const insert = require("../utils/insert");
const uploadController = (req, res) => {
  if (req.headers.authorization !== process.env.AUTHORIZATION_KEY) {
    res.send({ success: false, msg: "access denied" });
  } else {
    req.files.map((file) => {
      // const data = {
      //     filename:file.originalname,
      //     path
      // }
      console.log(file);
    });
  }
};

module.exports = uploadController;
