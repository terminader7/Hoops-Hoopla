import nba from "nba-api-client";

export const fetchTeamDetails = async (teamName: string) => {
  try {
    const teamIdData = await nba.getTeamID(teamName);
    const teamId = teamIdData.TeamID;

    const teamDetails = await nba.teamDetails({ TeamID: teamId });
    return teamDetails;
  } catch (error) {
    console.error("Error fetching team details:", error);
    throw new Error("Failed to fetch team details");
  }
};
