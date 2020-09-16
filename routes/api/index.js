const router = require("express").Router();
const drinkRoutes = require("./drink");
const shopRoutes = require("./shop");

// drinks routes
router.use("/drink", drinkRoutes);

// shops routes
router.use("/shop", shopRoutes);

module.exports = router;
