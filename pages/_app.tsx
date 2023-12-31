import { CssBaseline, PaletteMode } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { useMemo } from "react";
import getThemeOptions from "../config/theme";

const HoopsHoopla = ({ Component, pageProps }) => {
  // Light Dark mode not set up yet, might need useWrappedStore
  const { mode, primaryColor, secondaryColor } = pageProps;

  const getPreferredTheme = (): PaletteMode => {
    if (typeof window !== "undefined" && window.matchMedia) {
      if (window.matchMedia("(prefers-color-scheme: dark)").matches) {
        return "light";
      }
    }
    return "light";
  };

  const theme = useMemo(
    () =>
      createTheme(
        getThemeOptions(getPreferredTheme(), primaryColor, secondaryColor)
      ),
    [primaryColor, secondaryColor]
  );

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
};

export default HoopsHoopla;
