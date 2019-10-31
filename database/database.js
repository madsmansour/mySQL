var mysql = require('mysql2');
var settings = require('./settings')

var con = mysql.createConnection({
  "host": settings.host,
  "user": settings.user,
  "password": settings.password
});

//createDB = () =>
//{
con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
    con.query("CREATE DATABASE databaseKunder", function (err, result) {
      if (err) throw err;
      console.log("Database created");
    });
  });
//}
//module.exports = createDB;
