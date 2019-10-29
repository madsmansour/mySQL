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
    var sql = "INSERT INTO mads (name, address) VALUES ('Kune', 'Kone')";
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("1 record inserted");
    });
  });