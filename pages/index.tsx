import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Typography, styled } from "@mui/material";
import InlineContainer from "../components/InlineContainer";
import { green } from "@mui/material/colors";
import { Global } from "@emotion/react";
import Link from "../components/Link";
import { NavItem } from "../features/layout/components/Navigation";

// Provide top 5 leaders in each statistical category, clicking on cat name will take player to players page with filter preselected

export const Wrapper = styled(Box)(
  ({ theme }) => `
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  height: 100vh;
  background-color: #2097fa;
  padding: 1rem 0;
`
);

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
          <Box sx={{ padding: "1rem" }}>
            <Typography variant="h4" fontWeight={600}>
              Hoops Hoopla
            </Typography>
          </Box>
          <InlineContainer
            sx={{ minWidth: "100px", backgroundColor: "#FA8320" }}
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
}
