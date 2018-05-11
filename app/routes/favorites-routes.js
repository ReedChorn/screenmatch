// *********************************************************************************
// favorites-routes.js - this file offers a set of routes for displaying data from and saving data to the 'list' table in the screenmatch_db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the search results
  app.get("/favorites", function(req, res) {
    db.Favorite.findAll({})
    .then(function(data) {
      res.json(data);
    })
  })

  //POST route for adding a selection to Favorites
  app.post("/favorites/add", function(req, res) {
    db.Favorite.create(
        { APIfunc: req.body.APIfunc }
    ).then(function() {
        res.redirect("/favorites") // re-render html
    })
  })

  //DELETE route for deleting a favorite movie
  app.delete("/favorites/remove/:id", function(req, res) {
    db.Favorite.destroy({
      where: {
          id: req.params.id
      } // where id matches req.params.id
    }).then(function() {
        res.redirect("/favorites"); // re-render html
    })
  })

}
