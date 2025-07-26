const axios = require("axios");

const BASE_URL = "https://api.balldontlie.io/v1";

const apiClient = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    Accept: "application/json",
  },
});

const fetchAllTeams = async (page = 1, perPage = 30) => {
  try {
    const response = await apiClient.get("/teams", {
      params: {
        page: page,
        per_page: perPage,
      },
    });
    return {
      data: response.data.data,
      meta: response.data.meta,
    };
  } catch (error) {
    console.error("NBA API Error:", error.message);
    throw new Error("Failed to fetch teams from NBA API");
  }
};

const fetchTeamById = async (id) => {
  try {
    const response = await apiClient.get("/teams");
    const team = response.data.data.find((t) => t.id === parseInt(id));
    return team || null;
  } catch (error) {
    console.error("NBA API Error:", error.message);
    throw new Error("Failed to fetch team from NBA API");
  }
};

const searchTeamsByName = async (searchName) => {
  try {
    const response = await apiClient.get("/teams");
    const teams = response.data.data;
    const filteredTeams = teams.filter(
      (team) =>
        team.name.toLowerCase().includes(searchName.toLowerCase()) ||
        team.city.toLowerCase().includes(searchName.toLowerCase()) ||
        team.full_name.toLowerCase().includes(searchName.toLowerCase())
    );
    return filteredTeams;
  } catch (error) {
    console.error("NBA API Error:", error.message);
    throw new Error("Failed to search teams from NBA API");
  }
};

module.exports = {
  fetchAllTeams,
  fetchTeamById,
  searchTeamsByName,
};
