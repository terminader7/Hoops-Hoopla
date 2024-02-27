import nba from "nba-api-client";

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
  },
  league: {
    leaders: (
      LeagueID?: string,
      PerMode?: string,
      Scope?: string,
      Season?: string,
      SeasonType?: string,
      StatCategory?: string
    ) =>
      `/api/nba-league-leaders-route?LeagueID=${LeagueID}&PerMode=${PerMode}&Scope=${Scope}&Season=${Season}&SeasonType=${SeasonType}&StatCategory=${StatCategory}`,
  },
};
