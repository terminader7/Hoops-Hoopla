import { NextApiRequest, NextApiResponse } from "next";
import nba from "nba-api-client";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  try {
    if (req.method !== "GET") {
      return res.status(405).json({ message: "Method Not Allowed" });
    }

    const allPlayersList = await nba.allPlayersList({
      IsOnlyCurrentSeason: "0",
      LeagueID: "00",
      playerList: "",
      Season: "2023-24",
    });

    res.status(200).json(allPlayersList);
  } catch (error) {
    console.error("Error fetching all players list:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
