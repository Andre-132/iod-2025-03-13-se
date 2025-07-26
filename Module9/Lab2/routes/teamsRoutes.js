const express = require("express");
const { teamsController } = require("../controllers");
const router = express.Router();

router.get("/", teamsController.getAllTeams);
router.get("/:id", teamsController.getTeamById);
router.get("/search/:name", teamsController.searchTeamByName);
module.exports = router;
