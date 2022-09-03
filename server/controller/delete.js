const del = require("../utils/delete");
const deleteFile = async (req, res) => {
  const id = req.body.id;
  const deleted = await del("files", "id", id);
  if (deleted) {
    res.send({ success: true });
  }
};

module.exports = deleteFile;
