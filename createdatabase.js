var mysql = require('mysql2');

var con = mysql.createConnection({
  host: "192.168.99.101",
  user: "root",
  password: "mads"
});

con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE madsdb", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
