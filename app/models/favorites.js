module.exports = function(sequelize, DataTypes) {
    var Favorite = sequelize.define("favorite", {
      // the routeName gets saved as a string
      APIfunc: {
        type: DataTypes.UUID,
        defaultValue: function() {
            return APIfunc()
        },
        allowNull: false,
        validate: {
          len: [1]
        }
      }
    }, {
      timestamps: false
    })
    return Favorite
  }