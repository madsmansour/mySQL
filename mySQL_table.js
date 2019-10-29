var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "192.168.99.101",
  user: "root",
  password: "mads",
  database: "mydb"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE mads (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});