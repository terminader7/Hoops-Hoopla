import React from "react";
import { Grid, Box, Typography } from "@mui/material";
import SearchField from "./SearchField";

const GridItem = ({ index, isComparingPlayers }) => {
  const title = isComparingPlayers ? `Player ${index} ` : `Team ${index}`;
  const description = isComparingPlayers
    ? "Type a player's name then select an option"
    : "Search for a team";

  return (
    <Grid item xs={12} sm={6}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: ".5rem",
        }}
      >
        <Box>
          <Typography variant="h6" fontWeight={600}>
            {title}
          </Typography>
          <Typography variant="body1">{description}</Typography>
        </Box>
        <SearchField isSearchingPlayer={isComparingPlayers} />
      </Box>
    </Grid>
  );
};

const PlayerComparisonGrid = ({ isComparingPlayers, numItems }) => {
  const items = [];

  for (let i = 1; i <= numItems; i++) {
    items.push(
      <GridItem key={i} index={i} isComparingPlayers={isComparingPlayers} />
    );
  }

  return (
    <Grid container spacing={2}>
      {items}
    </Grid>
  );
};

export default PlayerComparisonGrid;
