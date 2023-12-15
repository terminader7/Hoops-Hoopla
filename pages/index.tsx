import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Box,
  TextField,
  Typography,
  createTheme,
  styled,
  useTheme,
} from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { green } from "@mui/material/colors";
import { Global } from "@emotion/react";
import Link from "../components/Link";
import { NavBar, NavItem } from "../features/layout/components/Navigation";
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

const HomePageContainer = styled(Box)(
  ({ theme }) => `
  display: flex;
  height: 100vh;
  background-color: ${theme.palette.common.white};
  flex-direction: column;
  width: 75%;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  border-radius: 5px;
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
        <HomePageContainer>
          <InlineContainer
            sx={{
              padding: "1rem",
              justifyContent: "space-between",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Typography variant="h4" fontWeight={600}>
              Hoops Hoopla
            </Typography>
            <TextField
              label="Search"
              variant="outlined"
              size="medium"
              color="primary"
              sx={{
                width: { xs: "80%", md: "30%" },
                marginRight: { xs: "0", md: "3rem" },
              }}
            />
          </InlineContainer>
          <NavBar />
        </HomePageContainer>
      </Wrapper>
    </>
  );
};

export default Homepage;
