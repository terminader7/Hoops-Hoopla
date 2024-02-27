// pages/api/nba-league-leaders.js

import { NextApiRequest, NextApiResponse } from "next";
import nba from "nba-api-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const { LeagueID, PerMode, Scope, Season, SeasonType, StatCategory } =
      req.query;

    const leagueLeaders = await nba.leagueLeaders({
      LeagueID,
      PerMode,
      Scope,
      Season,
      SeasonType,
      StatCategory,
    });

    res.status(200).json(leagueLeaders);
  } catch (error) {
    console.error("Error fetching league leaders:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
