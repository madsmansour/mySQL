var mysql = require('mysql2');
var settings = require('./settings')

var con = mysql.createConnection({
  "host": settings.host,
  "user": settings.user,
  "password": settings.password,
});


con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query(sql, function (err, result) {
      if (err) throw err;
      console.log("Result: " + result);
    });
  });