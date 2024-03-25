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
import { Global } from "@emotion/react";
import { NavBar, NavItem } from "../features/layout/Navigation";
import BasketballIcon from "@mui/icons-material/SportsBasketball";
import MenuIcon from "@mui/icons-material/MenuRounded";
import GlobalSearch from "../features/layout/GlobalSearch";
import SearchField from "../components/SearchField";
import { useState } from "react";

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
  const [isSearchingPlayer, setIsSearchingPlayer] = useState(true);

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
              justifyContent: "space-between",
              alignItems: "center",
              padding: "1rem 2rem",
              flexDirection: { xs: "column", md: "row" },
            }}
          >
            <Box>
              <Typography variant="h5" fontWeight={600}>
                {isSearchingPlayer ? "Player 1" : "Team 1"}
              </Typography>
              <SearchField isSearchingPlayer={isSearchingPlayer} />
            </Box>
          </InlineContainer>
        </HomePageContainer>
      </Wrapper>
    </>
  );
};

export default Homepage;
