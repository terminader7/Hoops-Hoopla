import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Typography, createTheme, styled, useTheme } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { green } from "@mui/material/colors";
import { Global } from "@emotion/react";
import Link from "../components/Link";
import { NavItem } from "../features/layout/components/Navigation";
import { useMemo } from "react";
import getThemeOptions from "../config/theme";

// Provide top 5 leaders in each statistical category, clicking on cat name will take player to players page with filter preselected

const Wrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: ${theme.palette.secondary.main};
  padding: 1rem 0;
`
);

const Homepage = () => {
  const theme = useTheme();
  return (
    <>
      <Global
        styles={{
          body: {
            margin: 0,
            padding: 0,
          },
          html: {
            margin: 0,
            padding: 0,
          },
        }}
      />
      <Wrapper>
        <Box
          sx={{
            display: "flex",
            height: "100vh",
            backgroundColor: "common.white",
            flexDirection: "column",
            width: "75%",
            boxShadow: "0px 0px 10px 0px rgba(0,0,0,0.75)",
            borderRadius: "5px",
          }}
        >
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h4" fontWeight={600}>
              Hoops Hoopla
            </Typography>
          </Box>
          <InlineContainer
            sx={{
              minWidth: "100px",
              backgroundColor: theme.palette.primary.main,
            }}
          >
            <NavItem text="Stats Home" href={"/"} />
            <NavItem text="Players" href={"/"} />
            <NavItem text="Teams" href={"/"} />
            <NavItem text="Leaders" href={"/"} />
            <NavItem text="Compare" href={"/"} />
          </InlineContainer>
        </Box>
      </Wrapper>
    </>
  );
};

export default Homepage;
function getPreferredTheme(): import("@mui/material").PaletteMode {
  throw new Error("Function not implemented.");
}
