const nba = require("nba-api-client");

export const getTeamDetails = async (teamID: string | number) => {
  try {
    return await nba.teamDetails({ TeamID: teamID });
  } catch (error) {
    throw error;
  }
};
