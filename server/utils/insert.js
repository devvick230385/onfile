const db = require("./dbConnection");

const insert = (table, data) => {
  return new Promise((resolve, reject) => {
    const sql = `INSERT INTO ${table} SET ?`;
    db.query(sql, data, (err, result) => {
      return err ? reject(err) : resolve(true);
    });
  });
};

module.exports = insert;
