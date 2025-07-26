const teamService = require("../services/teamService");

const getAllTeams = async (req, res) => {
  try {
    const { page = 1, per_page = 30 } = req.query;
    const teams = await teamService.fetchAllTeams(page, per_page);
    res.json({
      success: true,
      data: teams.data,
      meta: teams.meta,
    });
  } catch (error) {
    console.error("Error fetching teams:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch teams",
    });
  }
};

const getTeamById = async (req, res) => {
  try {
    const { id } = req.params;
    if (!id || isNaN(id)) {
      return res.status(400).json({
        success: false,
        error: "Valid team ID is required",
      });
    }
    const team = await teamService.fetchTeamById(id);
    if (!team) {
      return res.status(404).json({
        success: false,
        error: "Team not found",
      });
    }
    res.json({
      success: true,
      data: team,
    });
  } catch (error) {
    console.error("Error fetching team:", error);
    res.status(500).json({
      success: false,
      error: "Failed to fetch team",
    });
  }
};

const searchTeamByName = async (req, res) => {
  try {
    const { name } = req.params;
    if (!name || name.trim().length < 2) {
      return res.status(400).json({
        success: false,
        error: "Team name must be at least 2 characters long",
      });
    }
    const teams = await teamService.searchTeamsByName(name);
    res.json({
      success: true,
      data: teams,
      count: teams.length,
    });
  } catch (error) {
    console.error("Error searching teams:", error);
    res.status(500).json({
      success: false,
      error: "Failed to search teams",
    });
  }
};

module.exports = {
  getAllTeams,
  getTeamById,
  searchTeamByName,
};
