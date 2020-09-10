const router = require("express").Router();
const drinkController = require("../../controllers/drinkController");

// Matches with "/api/drinks"
router.route("/")
  .get(drinkController.findAll)
  .post(drinkController.create);

// Matches with "/api/drinks/:id"
router
  .route("/:id")
  .get(drinkController.findById)
  .put(drinkController.update)
  .delete(drinkController.remove);

module.exports = router;