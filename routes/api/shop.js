const router = require("express").Router();
const shopController = require("../../controllers/shopController");

// Matches with "/api/shops"
// router.route("/")
//   .get(shopController.findAllByUser)
//   .post(shopController.create);

router.route("/")
  .get(shopController.findAll)
  .post(shopController.create);

// Matches with "/api/shops/:id"
router
  .route("/:id")
  .get(shopController.findById)
  .put(shopController.update)
  .delete(shopController.remove);

module.exports = router;