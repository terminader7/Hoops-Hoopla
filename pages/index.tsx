import Head from "next/head";
import {
  Box,
  FormControlLabel,
  Grid,
  Radio,
  RadioGroup,
  TextField,
  Typography,
  createTheme,
  styled,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { Global } from "@emotion/react";
import { NavBar, NavItem } from "../features/layout/Navigation";
import BasketballIcon from "@mui/icons-material/SportsBasketball";
import MenuIcon from "@mui/icons-material/MenuRounded";
import GlobalSearch from "../features/layout/GlobalSearch";
import SearchField from "../components/SearchField";
import { useState } from "react";
import RadioBox from "../components/RadioBox";
import { ComparisonMode } from "../features/types";

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

const Homepage = () => {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up("lg"));
  const [comparisonMode, setComparisonMode] = useState(
    ComparisonMode.PLAYER_VS_PLAYER
  );

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
            {/* {!isDesktop && (
              <InlineContainer>
                <MenuIcon sx={{ fontSize: "large" }} />
                <Typography variant="body1" fontWeight={600}>
                  MENU
                </Typography>
              </InlineContainer>
            )} */}
            <Typography variant="body1" fontWeight="bold">
              A place for settling basketball debates
            </Typography>
          </InlineContainer>
          {isDesktop && <NavBar />}
          <InlineContainer
            sx={{
              justifyContent: "center",
              alignItems: "center",
              padding: "1rem 2rem",
              flexDirection: "column",
            }}
          >
            <InlineContainer>
              <RadioGroup
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  gap: "1rem",
                  padding: "1rem",
                  justifyContent: "center",
                }}
              >
                <RadioBox
                  active={comparisonMode === ComparisonMode.PLAYER_VS_PLAYER}
                  onClick={() =>
                    setComparisonMode(ComparisonMode.PLAYER_VS_PLAYER)
                  }
                >
                  <FormControlLabel
                    value={ComparisonMode.PLAYER_VS_PLAYER}
                    onChange={() =>
                      setComparisonMode(ComparisonMode.PLAYER_VS_PLAYER)
                    }
                    control={
                      <Radio
                        size="small"
                        checked={
                          comparisonMode === ComparisonMode.PLAYER_VS_PLAYER
                        }
                        sx={{ position: "relative", top: -20 }}
                      />
                    }
                    disableTypography
                    label={
                      <Box>
                        <Typography variant="body1" fontWeight={600} noWrap>
                          Player vs. Player
                        </Typography>
                        <Typography variant="body2">
                          Head-to-Head, or do multi-player comparions
                        </Typography>
                      </Box>
                    }
                  />
                </RadioBox>
                <RadioBox
                  active={comparisonMode === ComparisonMode.TEAM_VS_TEAM}
                  onClick={() => setComparisonMode(ComparisonMode.TEAM_VS_TEAM)}
                >
                  <FormControlLabel
                    value={ComparisonMode.TEAM_VS_TEAM}
                    onChange={() =>
                      setComparisonMode(ComparisonMode.TEAM_VS_TEAM)
                    }
                    control={
                      <Radio
                        size="small"
                        checked={comparisonMode === ComparisonMode.TEAM_VS_TEAM}
                        sx={{ position: "relative", top: -20 }}
                      />
                    }
                    disableTypography
                    label={
                      <Box>
                        <Typography variant="body1" fontWeight={600} noWrap>
                          Team vs. Team
                        </Typography>
                        <Typography variant="body2">
                          Compare two teams against each other
                        </Typography>
                      </Box>
                    }
                  />
                </RadioBox>
              </RadioGroup>
            </InlineContainer>
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {comparisonMode === ComparisonMode.PLAYER_VS_PLAYER
                  ? "Player 1"
                  : "Team 1"}
              </Typography>
              <SearchField
                isSearchingPlayer={
                  comparisonMode === ComparisonMode.PLAYER_VS_PLAYER
                }
              />
            </Box>
          </InlineContainer>
        </HomePageContainer>
      </Wrapper>
    </>
  );
};

export default Homepage;
