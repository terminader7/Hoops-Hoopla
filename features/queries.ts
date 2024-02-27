export const fetchTeamDetails = async (teamId: number) => {
  try {
    const req = await fetch(`/api/nba-team-details-route?teamId=${teamId}`);
    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Error fetching team details:", error);
    return null;
  }
};

// export const fetchTeams = async () => {
//   try {
//     const teams = await nba.getTeams();
//     return teams;
//   } catch (error) {
//     console.error("Error fetching teams:", error);
//     throw new Error("Failed to fetch teams");
//   }
// };
