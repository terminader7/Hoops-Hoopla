import { routes } from "../../pages/api/routes";
import { StatCategory } from "../types";

export const fetchLeagueLeaders = async (
  PerMode?: string,
  Scope?: string,
  Season?: string,
  SeasonType?: string,
  StatCategory?: string
) => {
  try {
    const LeagueID = "00";
    const req = await fetch(
      routes.players.leagueLeaders(
        LeagueID,
        PerMode,
        Scope,
        Season,
        SeasonType,
        StatCategory
      )
    );
    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Error fetching league leaders:", error);
    return null;
  }
};

export const fetchAllPlayersList = async (playerSeason = "") => {
  try {
    let endpoint = "/api/nba-all-players-route";
    if (playerSeason) {
      endpoint += `?Season=${playerSeason}`;
    }
    const req = await fetch(endpoint);
    const res = await req.json();
    return res;
  } catch (error) {
    console.error("Error fetching all players list:", error);
    return null;
  }
};
