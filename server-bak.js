var mysql = require("mysql");
var inquirer = require("inquirer")
const table = require('console.table');
var connection = mysql.createConnection({
  host: "localhost",
    port:3306,

  // Your username
  user: "root",

  // Your password
  password: "Kingman1",
  database: "burger_db"
});