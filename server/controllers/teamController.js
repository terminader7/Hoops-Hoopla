const nba = require("nba-api-client");

const getTeamDetails = async (req, res) => {
  try {
    const teamName = req.params.teamName;
    const teamIdData = await nba.getTeamID(teamName);
    const teamId = teamIdData.TeamID;

    const teamDetails = await nba.teamDetails({ TeamID: teamId });
    res.json(teamDetails);
  } catch (error) {
    console.error("Error fetching team details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
};

module.exports = {
  getTeamDetails,
};
