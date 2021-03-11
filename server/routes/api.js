const express = require("express");
const router = express.Router();

const checkAuth = require("../middleware/check-auth");

const CityController = require("../controllers/Api/CityController");
const DivisionController = require("../controllers/Api/DivisionController");
const FamilyController = require("../controllers/Api/FamilyController");

router.get("/cities", CityController.index);
router.post("/cities", checkAuth, CityController.store);
router.delete("/cities/:id", checkAuth, CityController.destroy);

router.get("/divisions", DivisionController.index);
router.post("/divisions", checkAuth, DivisionController.store);
router.delete("/divisions/:id", checkAuth, DivisionController.destroy);

// router.delete("/divisions/:id", checkAuth, DivisionController.destroy);

router.get("/familes", FamilyController.index);

module.exports = router;
