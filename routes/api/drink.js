const router = require("express").Router();
const drinkController = require("../../controllers/drinkController");

// Matches with "/api/drink"
router.route("/")
  .get(drinkController.findAll)
  // .get(drinkController.findOne)
  .post(drinkController.create);

router
  .route("/:id")
  .get(drinkController.findById)
  .put(drinkController.update)
  .delete(drinkController.remove);

module.exports = router;