require("dotenv").config();
const uuid = require("uuid");
const insert = require("../utils/insert");
const uploadController = (req, res) => {
  if (req.headers.authorization !== process.env.AUTHORIZATION_KEY) {
    res.send({ success: false, msg: "access denied" });
  } else {
    req.files.map(async (file) => {
      const data = {
        filename: file.originalname,
        id: uuid.v4(),
        path: file.path,
        type: file.mimetype.split("/")[0],
      };
      await insert("files", data);
    });
    res.send({ success: true });
  }
};

module.exports = uploadController;
