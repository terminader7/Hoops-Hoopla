import Head from "next/head";
import {
  Box,
  Grid,
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
import { useMemo, useState } from "react";
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
  background-color: ${theme.palette.background.default};
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

const Top5FilterContainer = styled(Box, {
  shouldForwardProp: (prop) => prop !== "active",
})<{ active?: boolean }>(
  ({ theme, active }) => `
  display: flex;
  justify-content: center;
  border: 1px solid black;
  border-radius: 5px;
  padding: 0 1rem;
  width: 100%;
  cursor: pointer;
  transition: all .2s ease-in-out;
  background-color: ${
    active ? theme.palette.common.black : theme.palette.common.white
  };
  color: ${active ? theme.palette.common.white : theme.palette.common.black};

  `
);

const Homepage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [showPerGame, setShowPerGame] = useState(true);

  const top5PerGameGridItems = [
    "Points Per Game",
    "Assists Per Game",
    "Rebounds Per Game",
    "Steals Per Game",
    "Blocks Per Game",
    "Field Goal %",
    "3PM Per Game",
    "Three Point %",
    "Minutes Per Game",
  ];

  const top5TotalsGridItems = [
    "Total Points",
    "Total Assists",
    "Total Rebounds",
    "Total Steals",
    "Total Blocks",
    "Total 3 Pointers Made",
  ];

  const statsGridItem = (item) => (
    <Grid item xs={12} md={4}>
      <Typography
        variant="body1"
        fontWeight={600}
        textAlign="center"
        noWrap
        overflow="visible"
      >
        {item}
      </Typography>
    </Grid>
  );

  return (
    <>
      <Head>
        <title>Home</title>
      </Head>
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
          <InlineContainer
            sx={{
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 2rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box width="100%">
              <InlineContainer
                sx={{
                  gap: "2rem",
                }}
              >
                <Top5FilterContainer
                  onClick={() => {
                    setShowPerGame(true);
                  }}
                  active={showPerGame}
                >
                  <Typography variant="body1" fontWeight={600} noWrap>
                    Per Game
                  </Typography>
                </Top5FilterContainer>
                <Top5FilterContainer
                  onClick={() => {
                    setShowPerGame(false);
                  }}
                  active={!showPerGame}
                >
                  <Typography variant="body1" fontWeight={600}>
                    Totals
                  </Typography>
                </Top5FilterContainer>
              </InlineContainer>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: "2rem",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                {showPerGame
                  ? top5PerGameGridItems.map((item) => statsGridItem(item))
                  : top5TotalsGridItems.map((item) => statsGridItem(item))}
              </Grid>
            </Box>
            <Box
              width="100%"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Box
                sx={{
                  border: "1px solid",
                  borderColor: "black",
                  borderRadius: "5px",
                  padding: "0 1rem",
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="body1" fontWeight={600}>
                  Standings
                </Typography>
              </Box>
              <Grid
                container
                spacing={2}
                sx={{
                  marginTop: "2rem",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  minWidth: "100%",
                }}
              >
                {top5TotalsGridItems.map((item) => statsGridItem(item))}
              </Grid>
            </Box>
          </InlineContainer>
        </HomePageContainer>
      </Wrapper>
    </>
  );
};

export default Homepage;
