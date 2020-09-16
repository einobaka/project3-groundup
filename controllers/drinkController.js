const db = require("../models");

// Defining methods for the drinkController
module.exports = {

  // Returns all drinks
  findAll: function (req, res) {
    db.Drink
      .find() 
      .then(dbDrinks => res.json(dbDrinks))
      .catch(err => res.status(422).json(err));
  },

    // Creates a new drink record
    create: function (req, res) {
      // console.log(req.body)
      db.Drink
        .create(req.body)
        .then(dbDrinks => {
          console.log(dbDrinks)
          db.Shop.findOneAndUpdate({ _id: req.body.shop }, { $push: { drinks: dbDrinks._id }})
          .then(dbShop => false)
        })
        // .then(dbDrinks => res.json(dbDrinks));
        // console.log(dbDrinks)
        .catch(err => res.status(422).json(err));
    },
  
  // Returns a single drink
  findById: function (req, res) {
    db.Drink
      .findById(req.params.id)
      .populate("shop")
      .then(dbDrinks => res.json(dbDrinks))
      .catch(err => res.status(422).json(err));
  },

  // Finds and updates a drink
  update: function (req, res) {
    db.Drink
      .findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(dbDrinks => res.json(dbDrinks))
      .catch(err => res.status(422).json(err));
  },

  // Removes a drink
  remove: function (req, res) {
    db.Drink
      .findById({ _id: req.params.id })
      .then(dbDrinks => dbDrinks.remove())
      .then(dbDrinks => res.json(dbDrinks))
      .catch(err => res.status(422).json(err));
  }
};