const fs = require("fs");

const unlink = (path) => {
  return new Promise((resolve, reject) => {
    fs.unlink(path, (err) => {
      return err ? reject(err) : resolve(true);
    });
  });
};

module.exports = unlink;
