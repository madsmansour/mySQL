var express = require('express');
var router = express.Router();
var mysql = require('mysql2');
var settings = require('./settings')
let log = console.log;


let db_navn=settings.extra.database;
let table_navn=settings.extra.table;

/* GET home page. */ 
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Forsiden' });
});

// så når man er på rooten - i det her tilfælde index , laves en ny route som hedder createdatabase, der opretter databasen med nedenstående queries

router.get('/createdatabase',function(req,res,next) {
  var con = mysql.createConnection(settings.settings);
    con.connect(function (err, result) {
      if (err) throw err;
      log("Connected!");
    });
      // Query 1
      con.query("CREATE DATABASE "+ db_navn, function (err, result) {
        if (err) { log("Db creation failed."); throw err; }
        log("Database created.");
      });
      
      // Query 2
      con.query("USE "+ db_navn, function (err, result) {
        if (err) { log("USE statement failed."); throw err; }
        log("Using database " + db_navn + ".");
      });
      
      // Query 3
      sql = "CREATE TABLE " + table_navn +" (name VARCHAR(255), address VARCHAR(255))";
      con.query(sql, function (err, result) {
        if (err) throw err;
        log("Table " + table_navn + " created. ");
      });
  
      // Query 4
      var sql = "INSERT INTO " +table_navn+ " (name, address) VALUES ?";
      var values = [
        ['Bæstet', 'Beastroad 71'],
        ['Peter', 'Lowstreet 4'],
        ['Amy', 'Apple st 652'],
        ['Hannah', 'Mountain 21'],
        ['Michael', 'Valley 345'],
        ['Sandy', 'Ocean blvd 2'],
        ['Betty', 'Green Grass 1'],
        ['Richard', 'Sky st 331'],
        ['Susan', 'One way 98'],
        ['Vicky', 'Yellow Garden 2'],
        ['Ben', 'Park Lane 38'],
        ['William', 'Central st 954'],
        ['Chuck', 'Main Road 989'],
        ['Viola', 'Sideway 1633']
      ];
      con.query(sql, [values], function (err, result) {
        if (err) throw err;
        console.log("Number of records inserted: " + result.affectedRows);
        process.exit(); // Uden denne vil eksekveringen ikke stoppe. 
        res.end();
      });
  })

  // en ny router, når det bliver sendt en get request på root/showdata udføres følgende:

  router.get('/showdata',function(req,res,next) {
    var config = settings.settings;
    config.database = db_navn;
    var con = mysql.createConnection(settings.settings);
    con.connect(function (err, result) {
      if (err) throw err;
      log("Connected!");
    });

    con.query(`SELECT * FROM ${table_navn}`, function (err, result) {
      if (err) { log("SELECT statement failed."); throw err; }
      log("Using database " + table_navn + ".");
      let resultat = "<table id='t'>";
      console.log(result)
      for (let element of result) {
        resultat += "<tr>";
        resultat += "<td>" + "Navn: " + element.name + "</td><td>" + "Adresse: " + element.address +"</td>";
        resultat += "</tr>";
      
      }
      resultat += "</table>";
      res.send(resultat)

    });
  })

module.exports = router;