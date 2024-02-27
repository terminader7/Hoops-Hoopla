import { NextApiRequest, NextApiResponse } from "next";
import nba from "nba-api-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    const {
      LeagueID = "00",
      PerMode = "PerGame",
      Scope = "S",
      Season = "2022-23",
      SeasonType = "Regular+Season",
      StatCategory = "PTS",
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
