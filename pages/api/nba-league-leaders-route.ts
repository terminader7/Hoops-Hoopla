import { NextApiRequest, NextApiResponse } from "next";
import nba from "nba-api-client";
import { StatCat, StatPerMode } from "../../features/types";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      LeagueID = "00",
      PerMode = StatPerMode.PER_GAME,
      Scope = "S",
      Season = "2023-24",
      SeasonType = "Regular+Season",
      StatCategory = StatCat.PTS,
    } = req.query;

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
