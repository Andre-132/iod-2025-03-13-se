const express = require("express");
const router = express.Router();

const { add, subtract, multiply, divide } = require("../controllers/lab2");

router.get("/add", add);
router.get("/subtract", subtract);
router.get("/multiply", multiply);
router.get("/divide", divide);

module.exports = router;
