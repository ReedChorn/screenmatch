// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Dependencies
var Sequelize = require("sequelize");

// Creates mySQL connection using Sequelize, the empty string in the third argument spot is our password.
var sequelize = new Sequelize("screenmatch_db", "root", "root", {
  host: "localhost",
  dialect: "mysql",
  port: 3308
});

// Exports the connection for other files to use
module.exports = sequelize;
