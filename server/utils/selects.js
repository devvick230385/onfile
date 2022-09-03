const db = require("./dbConnection");

const specificSelect = (table, column, value) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${table} where ${column} = '${value}'`;
    db.query(sql, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
};

const generalSelect = (table) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM ${table}`;
    db.query(sql, (err, result) => {
      return err ? reject(err) : resolve(result);
    });
  });
};

module.exports = { specificSelect, generalSelect };
