
var Sequelize = require("sequelize");
var sequelize = require("../config/connection.js");


var User = sequelize.define("user", {
  firstName: Sequelize.STRING,
  lastName: Sequelize.STRING,
  email: Sequelize.STRING,
  fav_director: Sequelize.STRING,
  fav_actor: Sequelize.STRING,
  fav_genre: Sequelize.STRING,
  contemporary: Sequelize.STRING,
  animated: Sequelize.STRING,
  domestic: Sequelize.STRING
});


User.sync();

module.exports = User;
