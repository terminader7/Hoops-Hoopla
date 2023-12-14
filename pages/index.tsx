import Head from "next/head";
import styles from "../styles/Home.module.css";
import { Box, Typography } from "@mui/material";

export default function Home() {
  return (
    <Box>
      <Typography variant="h2" fontWeight={600}>
        Welcome to Hoops Hoopla!
      </Typography>
    </Box>
  );
}
