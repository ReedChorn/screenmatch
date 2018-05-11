// *********************************************************************************
// user-routes.js - this file offers a set of routes for creating new users and adding them to the 'users' table in the screenmatch_db
// *********************************************************************************

// Dependencies
// =============================================================

// Grabbing our models

var db = require("../models");

// Routes
// =============================================================
module.exports = function(app) {

  // GET route for listing all of the users
  app.get("/users", function(req, res) {
    db.User.findAll({})
    .then(function(data) {
      res.json(data)
    })
  })
  
  //POST route for adding a selection to Favorites
  app.post("/users/add", function(req, res) {
    db.User.create({ 
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      favRating: req.body.favRating,
      favGenre: req.body.favGenre,
      favPlatform: req.body.favPlatform,
      favActor: req.body.favActor,
      favDirector: req.body.favDirector
    }).then(function(data) {
        res.json(data)
    })
  })

  //DELETE route for deleting a user account
  app.delete("/users/delete/:id", function(req, res) {
    db.User.destroy({
      where: {
          id: req.params.id
      } // where id matches req.params.id
    }).then(function(data) {
        res.json(data)
    })
  })

  // PUT route for updating user preferences or info
  app.put("/users/todos", function(req, res) {
    db.Todo.update({
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      email: req.body.email,
      password: req.body.password,
      favRating: req.body.favRating,
      favGenre: req.body.favGenre,
      favPlatform: req.body.favPlatform,
      favActor: req.body.favActor,
      favDirector: req.body.favDirector
    }, {
      where: {
        id: req.body.id
      }
    }).then(function(dbTodo) {
      res.json(dbTodo);
    })
  })
}
