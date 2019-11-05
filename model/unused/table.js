var mysql = require('mysql2');
var settings = require('../settings')

var con = mysql.createConnection({
  "host": settings.host,
  "user": settings.user,
  "password": settings.password,
  "database": settings.database
});

//createTable = () => {
con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
  var sql = "CREATE TABLE kunder (name VARCHAR(255), address VARCHAR(255))";
  con.query(sql, function (err, result) {
    if (err) throw err;
    console.log("Table created");
  });
});
//}
//module.exports = createTable;