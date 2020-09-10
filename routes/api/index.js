const router = require("express").Router();
// const userRoutes = require("./user");
const drinkRoutes = require("./drink");
const shopRoutes = require("./shop");

// drinks routes
router.use("/drink", drinkRoutes);

// login routes
// router.use("/user", userRoutes);

// shops routes
router.use("/shop", shopRoutes);

module.exports = router;
