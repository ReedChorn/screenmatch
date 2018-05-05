// *********************************************************************************
// api-routes.js - this file offers a set of routes for displaying and saving data to the db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for getting all of the search results
  app.get("/api/searchResults", function(req, res) {
    db.Preference.findAll({})
    .then(function(dbPost) {
      res.json(dbPost);
    })
  })

  // POST route for saving a new todo. You can add a film to favorites using the data on req.body
  app.post("/api/favorites", function(req, res) {

  });

  // DELETE route for deleting favorite movies. You can access the favorites id in req.params.id
  app.delete("/api/favorites/:id", function(req, res) {

  });

  // PUT route for updating user movie preferences. The updated preferences will be available in req.body
  app.put("/api/preferences", function(req, res) {

  });
};
