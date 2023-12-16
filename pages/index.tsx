import Head from "next/head";
import styles from "../styles/Home.module.css";
import {
  Box,
  TextField,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { green } from "@mui/material/colors";
import { Global } from "@emotion/react";
import Link from "../components/Link";
import { NavBar, NavItem } from "../features/layout/components/Navigation";
import { useMemo } from "react";
import getThemeOptions from "../config/theme";
import BasketballIcon from "@mui/icons-material/SportsBasketball";
import MenuIcon from "@mui/icons-material/MenuRounded";
import GlobalSearch from "../features/layout/components/GlobalSearch";

// Provide top 5 leaders in each statistical category, clicking on cat name will take player to players page with filter preselected

const Wrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: ${theme.palette.secondary.dark};
  padding: 1rem 0;
  overflow: hidden;`
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
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));

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
              gap: "1rem",
              alignItems: "center",
            }}
          >
            <InlineContainer gap=".25rem">
              <BasketballIcon
                fontSize={isDesktop ? "large" : "small"}
                sx={{
                  color: "primary.main",
                }}
              />
              <Typography variant={isDesktop ? "h4" : "h6"} fontWeight={600}>
                Hoops Hoopla
              </Typography>
            </InlineContainer>
            {isDesktop ? (
              <GlobalSearch />
            ) : (
              <InlineContainer>
                <MenuIcon sx={{ fontSize: "large" }} />
                <Typography variant="body1" fontWeight={600}>
                  MENU
                </Typography>
              </InlineContainer>
            )}
          </InlineContainer>
          {isDesktop && <NavBar />}
        </HomePageContainer>
      </Wrapper>
    </>
  );
};

export default Homepage;
