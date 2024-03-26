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
          fullWidth
        />
      ) : (
        <TextField
          label="Search for a team"
          variant="outlined"
          size="small"
          fullWidth
        />
      )}
    </InlineContainer>
  );
};

export default SearchField;
