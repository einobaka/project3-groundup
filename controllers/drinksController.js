const db = require("../models/drinks");

// Defining methods for the drinksController
module.exports = {

  // Returns all drinks
  findAll: function(req, res) {
    db.Drinks
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },
  
  // Returns a single drink
  findById: function(req, res) {
    db.Drinks
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Creates a new drink record
  create: function(req, res) {
    db.Drinks
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Finds and updates a drink
  update: function(req, res) {
    db.Drinks
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Removes a drink
  remove: function(req, res) {
    db.Drinks
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
