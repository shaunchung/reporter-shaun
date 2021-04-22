const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "us-cdbr-east-03.cleardb.com",
  user: "b962aac91bae4d",
  database: "heroku_75288c25783bf42",
  password: "772a9923",
});

module.exports = pool.promise();
