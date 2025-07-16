const express = require("express");
const router = express.Router();
const CalculatorController = require("../controllers/calculatorController");

router.post("/api/calculate", CalculatorController.calculate);
router.get("/api/history", CalculatorController.getHistory);
router.delete("/api/history", CalculatorController.clearHistory);

module.exports = router;
