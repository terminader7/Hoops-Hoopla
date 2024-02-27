const express = require("express");
const router = express.Router();
const nba = require("nba-api-client");

router.get("/:teamId", async (req, res) => {
  try {
    const teamId = req.params.teamId;

    const teamDetails = await nba.teamDetails({ TeamID: teamId });
    res.json(teamDetails);
  } catch (error) {
    console.error("Error fetching team details:", error);
    res.status(500).json({ error: "Internal server error" });
  }
});

module.exports = router;
