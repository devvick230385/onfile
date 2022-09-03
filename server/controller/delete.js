const del = require("../utils/delete");
const unlink = require("../utils/unlink");
const deleteFile = async (req, res) => {
  const path = req.body.path;
  await unlink(path);
  const deleted = await del("files", "path", path);
  if (deleted) {
    res.send({ success: true });
  }
};

module.exports = deleteFile;
