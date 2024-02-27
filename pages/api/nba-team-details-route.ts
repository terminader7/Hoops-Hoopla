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

    const { teamId } = req.query;
    const teamDetails = await nba.teamDetails({ TeamID: teamId as string });

    res.status(200).json(teamDetails);
  } catch (error) {
    console.error("Error fetching team details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
}
