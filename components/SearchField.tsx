import { TextField } from "@mui/material";
import InlineContainer from "./InlineContainer";

const SearchField = ({ isSearchingPlayer }: { isSearchingPlayer: boolean }) => {
  return (
    <InlineContainer gap="1rem">
      {isSearchingPlayer ? (
        <TextField
          label="Search for a player"
          variant="outlined"
          size="small"
          sx={{ maxWidth: "400px" }}
          fullWidth
        />
      ) : (
        <TextField label="Search for a team" variant="outlined" size="small" />
      )}
    </InlineContainer>
  );
};

export default SearchField;
