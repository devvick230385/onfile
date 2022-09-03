const mysql = require("mysql");

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "onfile",
  charset: "utf8mb4",
});

module.exports = db;
