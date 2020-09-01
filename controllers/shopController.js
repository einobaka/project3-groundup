const db = require("../models/shop");

// Defining methods for the shopController
module.exports = {

   // Returns all shops
  findAll: function(req, res) {
    db.Shop
      .find(req.query)
      .sort({ date: -1 })
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Returns a single shop
  findById: function(req, res) {
    db.Shop
      .findById(req.params.id)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Creates a new shop record
  create: function(req, res) {
    db.Shop
      .create(req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Finds and updates a shop 
  update: function(req, res) {
    db.Shop
      .findOneAndUpdate({ _id: req.params.id }, req.body)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  },

  // Removes a shop
  remove: function(req, res) {
    db.Shop
      .findById({ _id: req.params.id })
      .then(dbModel => dbModel.remove())
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
  }
};
