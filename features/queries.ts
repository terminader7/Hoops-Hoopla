import nba from "nba-api-client";

export const fetchTeamDetails = async (teamId: number) => {
  try {
    const teamIdData = await nba.getTeamID(teamId);

    const teamDetails = await nba.teamDetails({});
    return teamDetails;
  } catch (error) {
    console.error("Error fetching team details:", error);
    throw new Error("Failed to fetch team details");
  }
};

export const fetchTeams = async () => {
  try {
    const teams = await nba.getTeams();
    return teams;
  } catch (error) {
    console.error("Error fetching teams:", error);
    throw new Error("Failed to fetch teams");
  }
};
