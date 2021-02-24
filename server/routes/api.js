const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");

const CityController = require("../controllers/Api/CityController");
const DivisionController = require("../controllers/Api/DivisionController");

router.get("/cities", CityController.index);
router.post("/cities", checkAuth, CityController.store);
router.delete("/cities/:id", checkAuth, CityController.destroy);

router.get("/divisions", DivisionController.index);
router.post("/divisions", checkAuth, DivisionController.store);
// router.delete("/divisions/:id", checkAuth, DivisionController.destroy);

module.exports = router;
