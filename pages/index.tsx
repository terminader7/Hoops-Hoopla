import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Typography } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { green } from "@mui/material/colors";
import { Global } from "@emotion/react";

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
      <Box
        sx={{
          position: "relative",
          height: "100vh",
          backgroundColor: "black",
          padding: 0,
          margin: 0,
        }}
      >
        <Box
          sx={{
            height: "100vh",
            backgroundColor: "green",
            marginX: "5rem",
          }}
        >
          <Typography variant="h2" fontWeight={600}>
            Welcome to Hoops Hoopla!
          </Typography>
          <InlineContainer sx={{ minWidth: "100px", backgroundColor: green }}>
            <Typography>Hello</Typography>
          </InlineContainer>
        </Box>
      </Box>
    </>
  );
}
