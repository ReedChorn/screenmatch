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
  return User
}