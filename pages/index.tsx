import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Typography, styled } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { green } from "@mui/material/colors";
import { Global } from "@emotion/react";

export const Wrapper = styled(Box)`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: black;
  padding: 0;
  margin: 0;
`;

export default function Home() {
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
            backgroundColor: "white",
            flexDirection: "column",
            width: "75%",
          }}
        >
          <Typography variant="h2" fontWeight={600}>
            Welcome to Hoops Hoopla!
          </Typography>
          <InlineContainer
            sx={{ minWidth: "100px", backgroundColor: "#FA8320" }}
          >
            <Typography variant="h6" fontWeight={600}>
              Hello
            </Typography>
          </InlineContainer>
        </Box>
      </Wrapper>
    </>
  );
}
