const router = require("express").Router();
const drinkController = require("../../controllers/drinkController");

// Matches with "/api/drink"
router.route("/")
  .get(drinkController.findAll)
  .post(drinkController.create)
  // .get(drinkController.findByName);

// Matches with "/api/drinks/:id"
router
  .route("/:id")
  .get(drinkController.findById)
  .put(drinkController.update)
  .delete(drinkController.remove);

module.exports = router;