import { StatCat, StatPerMode } from "../../features/types";

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
      LeagueID: string,
      PerMode: StatPerMode,
      Scope: string,
      Season: string,
      SeasonType: string,
      StatCategory: StatCat
    ) =>
      `/api/nba-league-leaders-route?LeagueID=${LeagueID}&PerMode=${PerMode}&Scope=${Scope}&Season=${Season}&SeasonType=${SeasonType}&StatCategory=${StatCategory}`,
  },
};
