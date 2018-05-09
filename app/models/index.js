"use strict";

var fs = require("fs");
var path = require("path");
var Sequelize = require("sequelize");
var basename = path.basename(module.filename);
var env = process.env.NODE_ENV || "development";
var config = require(__dirname + "/../config/config.json")[env];
var db = {};

if (config.use_env_variable) {
  var sequelize = new Sequelize(process.env[config.use_env_variable]);
} else {
  var sequelize = new Sequelize(config.database, config.username, config.password, config);
}

// fs
//   .readdirSync(__dirname)
//   .filter(function(file) {
//     return (file.indexOf(".") !== 0) && (file !== basename) && (file.slice(-3) === ".js");
//   })
//   .forEach(function(file) {
//     var model = sequelize["import"](path.join(__dirname, file));
//     db[model.name] = model;
//   });

// Object.keys(db).forEach(function(modelName) {
//   if (db[modelName].associate) {
//     db[modelName].associate(db);
//   }
// });

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = function(sequelize, DataTypes) {
var User = sequelize.define("user", {
  // the routeName gets saved as a string
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  // the name of the user (a string)
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  // the last name of the user (a string)
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  // the email of the user (a string)
  password: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [1]
    }
  },
  // the user's password (a string)
  favRating: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Ex: G, PG, PG-13",
    validate: {
      len: [1]
    }
  },
  // user's preferred movie rating (a string)
  faveGenre: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Ex: Action, Comedy, Horror",
    validate: {
      len: [1]
    }
  },
  // user's preferred movie genre (a string)
  favPlatform: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Ex: Netflix, Hulu, Movie, Youtube",
    validate: {
      len: [1]
    }
  },
  // user's preferred movie platform (a string)
  favActor: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Ex: Brad Pitt",
    validate: {
      len: [1]
    }
  },
  // actor(s) user wants to see
  favDirector: {
    type: DataTypes.STRING,
    allowNull: true,
    defaultValue: "Ex: Wes Anderson",
    validate: {
      len: [1]
    }
  },
  // director(s) user wants to see
  foreignDomestic: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      len: [1]
    }
  },
  // picking between domestic or foreign films
}, {
  timestamps: false
});
  return Post;
}

// Syncs with DB
Character.sync();

// Makes the Character Model available for other files (will also create a table)
module.exports = Character;

module.exports = db;
