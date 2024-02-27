import nba from "nba-api-client";
import { StatCategory } from "../../features/types";

export const routes = {
  team: {
    details: (teamId: string) => `/api/nba-team-details-route?teamId=${teamId}`,
  },
  teams: {
    list: "/api/nba-teams-route",
  },
  players: {
    all: (playerSeason: string) =>
      `/api/nba-all-players-route?playerSeason=${playerSeason}`,
    leagueLeaders: (
      LeagueID: string = "00",
      PerMode: string = "PerGame",
      Scope: string = "S",
      Season: string = "2023-24",
      SeasonType: string = "Regular+Season",
      StatCategory: string = "PTS"
    ) =>
      `/api/nba-league-leaders-route?LeagueID=${LeagueID}&PerMode=${PerMode}&Scope=${Scope}&Season=${Season}&SeasonType=${SeasonType}&StatCategory=${StatCategory}`,
  },
};
