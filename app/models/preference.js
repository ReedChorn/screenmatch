module.exports = function(sequelize, DataTypes) {
  var Preference = sequelize.define("Preference", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    faveMovie: {
      type: DataTypes.TEXT,
      allowNull: false,
      defaultValue: "Citizen Kane",
      validate: {
        len: [1]
      }
    },
    faveActor: {
      type: DataTypes.STRING,
      defaultValue: "Carrey Grant"
    },
    faveGenre: {
      type: DataTypes.STRING,
      defaultValue: "Drama"
    }
  });
  // return Post;
};
