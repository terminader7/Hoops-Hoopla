import { routes } from "../../pages/api/routes";

export const fetchTeamDetails = async (teamId: string) => {
  try {
    const req = await fetch(routes.team.details(teamId));
    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Error fetching team details:", error);
    return null;
  }
};
