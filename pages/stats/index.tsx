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
import InlineContainer from "../../components/InlineContainer";
import { Global } from "@emotion/react";
import Link from "../../components/Link";
import { NavBar, NavItem } from "../../features/layout/Navigation";
import { useEffect, useMemo, useState } from "react";
import getThemeOptions from "../../config/theme";
import BasketballIcon from "@mui/icons-material/SportsBasketball";
import MenuIcon from "@mui/icons-material/MenuRounded";
import GlobalSearch from "../../features/layout/GlobalSearch";
import { fetchLeagueLeaders } from "../../features/players/player-queries";
import { StatPerMode, StatCat } from "../../features/types";

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
    { title: "Points Per Game", stat: StatCat.PTS, mode: StatPerMode.PER_GAME },
    {
      title: "Assists Per Game",
      stat: StatCat.AST,
      mode: StatPerMode.PER_GAME,
    },
    {
      title: "Rebounds Per Game",
      stat: StatCat.REB,
      mode: StatPerMode.PER_GAME,
    },
    { title: "Steals Per Game", stat: StatCat.STL, mode: StatPerMode.PER_GAME },
    { title: "Blocks Per Game", stat: StatCat.BLK, mode: StatPerMode.PER_GAME },
    { title: "Field Goal %", stat: StatCat.FG_PCT, mode: StatPerMode.TOTALS },
    { title: "3PM Per Game", stat: StatCat.FG3M, mode: StatPerMode.PER_GAME },
    { title: "Three Point %", stat: StatCat.FG3_PCT, mode: StatPerMode.TOTALS },
    {
      title: "FTA Per Game",
      stat: StatCat.FTA,
      mode: StatPerMode.PER_GAME,
    },
    {
      title: "FTM Per Game",
      stat: StatCat.FTM,
      mode: StatPerMode.PER_GAME,
    },
    {
      title: "Free Throw %",
      stat: StatCat.FT_PCT,
      mode: StatPerMode.TOTALS,
    },
    {
      title: "Minutes Per Game",
      stat: StatCat.MIN,
      mode: StatPerMode.PER_GAME,
    },
  ];

  const top5TotalsGridItems = [
    "Points",
    "Assists",
    "Rebounds",
    "Steals",
    "Blocks",
    "3 Pointers Made",
    "Minutes Played",
    "Turnovers",
    "Games Played",
  ];

  const StatsGridItem = (item, index) => (
    <Grid item xs={12} md={4} key={index}>
      <Typography
        variant="body1"
        fontWeight={600}
        textAlign="center"
        noWrap
        overflow="visible"
      >
        {item.title}
      </Typography>
      <Typography
        variant="body1"
        fontWeight={600}
        textAlign="center"
        noWrap
        overflow="visible"
      >
        {item.stat}
      </Typography>
    </Grid>
  );

  const fetchLeagueLeadersForStat = async (
    stat: StatCat,
    mode: StatPerMode
  ) => {
    const leaders = await fetchLeagueLeaders({
      PerMode: mode,
      StatCategory: stat,
    });
    return leaders;
  };

  useEffect(() => {
    const fetchLeaders = async () => {
      const leaders = await Promise.all(
        top5PerGameGridItems.map((item) =>
          fetchLeagueLeadersForStat(item.stat, item.mode)
        )
      );
      console.log(leaders);
    };
    fetchLeaders();
  }, []);

  return (
    <>
      <Head>
        <title>Home</title>
        <link rel="icon" href="/images/basketball-icon.svg" />
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
                  <Typography variant="h6" fontWeight={600} noWrap>
                    Per Game
                  </Typography>
                </Top5FilterContainer>
                <Top5FilterContainer
                  onClick={() => {
                    setShowPerGame(false);
                  }}
                  active={!showPerGame}
                >
                  <Typography variant="h6" fontWeight={600}>
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
                {/* {showPerGame
                  ? top5PerGameGridItemTitles.map((item, index) =>
                      statsGridItem(item, index)
                    )
                  : top5TotalsGridItems.map((item, index) =>
                      statsGridItem(item, index)
                    )} */}
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
                  padding: "0 1rem",
                  width: "fit-content",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <Typography variant="h6" fontWeight={600}>
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
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    textAlign="center"
                    noWrap
                    overflow="visible"
                  >
                    Eastern Conference
                  </Typography>
                </Grid>
                <Grid item xs={12} md={4}>
                  <Typography
                    variant="body1"
                    fontWeight={600}
                    textAlign="center"
                    noWrap
                    overflow="visible"
                  >
                    Western Conference
                  </Typography>
                </Grid>
              </Grid>
            </Box>
          </InlineContainer>
        </HomePageContainer>
      </Wrapper>
    </>
  );
};

export default Homepage;
