const db = require("./dbConnection");

const deleteData = (table, column, value) => {
  return new Promise((resolve, reject) => {
    const sql = `DELETE FROM ${table} WHERE ${column} = '${value}'`;
    db.query(sql, (err, result) => {
      return err ? reject(err) : resolve(true);
    });
  });
};

module.exports = deleteData;
