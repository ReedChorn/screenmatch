// =============================================================
var User = require("../models/user.js");
var Favorites = require("../models/favorites.js");

// Routes
// =============================================================
module.exports = function(app) {
  app.get("/api/:login?", function(req, res) {
    if (req.params.login) {
      User.findOne({
        where: {
          email: req.params.login
        }
      }).then(function(result) {
        return res.json(result);
      });
    } else {
      console.log("User not found");
    }
  });

  app.post("/api/new", function(req, res) {
    var user = req.body;

    User.create({
      firstName: user.firstName,
      lastName: user.lastName,
      email: user.email,
      password: user.password,
      fav_director: user.fav_director,
      fav_actor: user.fav_actor,
      fav_genre: user.fav_genre,
      contemporary: user.contemporary,
      animated: user.animated,
      domestic: user.domestic
    }).then(function(user) {
      console.log(user.id);
    });
  });

  app.post("/api/newFav", function(req, res) {
    // Take the request...
    var fav = req.body;

    Favorites.create({
      omdbID: fav.omdbID,
      is_favorite: true,
      userID: fav.userID
    });
  });

  app.post("/api/findFav", function(req, res) {
    var findFav = req.body;
    console.log(findFav);

    Favorites.find({
      where: {
        omdbID: findFav.omdbID,
        userID: findFav.userID
      }
    }).then(function(favorite) {
      if (favorite) {
        favorite
          .updateAttributes({
            is_favorite: false
          })
          .then(function(result) {
            console.log(result);
          });
      }
    });
  });

  app.get("/api/findAll", function(req, res) {
    var allFavs = req.body;
  });

  app.post("/api/userPref", function(req, res) {
    var userPref = req.body;
    console.log(req.body)

    User.findAll({
      where: {
        email: userPref.email
      }
    }).then(function(result) {
      return res.json(result);
      console.log(res)
    });
  });
};
