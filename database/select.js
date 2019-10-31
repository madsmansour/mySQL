var mysql = require('mysql');

var con = mysql.createConnection({
    "host": settings.host,
    "user": settings.user,
    "password": settings.password,
    "database": settings.database
  });

con.connect(function(err) {
  if (err) throw err;
  con.query("SELECT * FROM kunder", function (err, result, fields) {
    if (err) throw err;
    console.log(result);
  });
});

var textarea = document.getElementById("select");  
    
for(var i = 0; i < con.query.length; i++) {
    var opt = con.query[i];
    var el = document.createElement("query");
    el.textContent = opt;
    el.value = opt;
    select.appendChild(textarea);
}

