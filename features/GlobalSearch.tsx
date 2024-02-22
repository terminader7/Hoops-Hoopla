import { TextField } from "@mui/material";

const GlobalSearch = () => {
  return (
    <TextField
      label="Search"
      variant="outlined"
      size="small"
      color="primary"
      sx={{
        width: { xs: "80%", md: "30%" },
        marginRight: { xs: "0", md: "3rem" },
      }}
    />
  );
};

export default GlobalSearch;
