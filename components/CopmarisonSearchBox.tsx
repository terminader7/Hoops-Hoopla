import { Box, Typography } from "@mui/material";
import SearchField from "./SearchField";
import { ComparisonMode } from "../features/types";

const ComparisonSearchBox = ({ comparisonMode }) => {
  return (
    <Box>
      <Typography variant="h5" fontWeight={600}>
        {comparisonMode === ComparisonMode.PLAYER_VS_PLAYER
          ? "Player 1"
          : "Team 1"}
      </Typography>
      <SearchField
        isSearchingPlayer={comparisonMode === ComparisonMode.PLAYER_VS_PLAYER}
      />
    </Box>
  );
};

export default ComparisonSearchBox;
