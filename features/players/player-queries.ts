import { routes } from "../../pages/api/routes";
import { Mode, StatCat } from "../types";

export const fetchLeagueLeaders = async ({
  LeagueID = "00",
  PerMode = Mode.PER_GAME,
  Scope = "S",
  Season = "2023-24",
  SeasonType = "Regular+Season",
  StatCategory = StatCat.PTS,
} = {}) => {
  try {
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
