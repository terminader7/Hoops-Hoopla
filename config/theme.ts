import {
  Breakpoints,
  darken,
  PaletteMode,
  ThemeOptions,
  PaletteOptions,
} from "@mui/material";

export const breakpoints: { values: Breakpoints["values"] } = {
  values: {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
  },
};

export const getColorOptions = (mode: "light" | "dark"): PaletteOptions => {
  const light = {
    primary: {
      light: "#FF8C66",
      main: "#E66E3C",
      dark: "#B35422",
    },
    secondary: {
      light: "#5AC9FF",
      main: "#0EA5E9",
      dark: "#0078B3",
    },
    tertiary: {
      main: "#002F95",
    },
    error: {
      main: "#D32F2F",
    },
    warning: {
      main: "#ED6C02",
    },
    background: {
      default: "#4F7390",
      paper: "#FFFFFF",
    },
    divider: "rgba(0, 0, 0, 0.12)",
  };

  const dark = {
    primary: light.primary,
    secondary: light.secondary,
    tertiary: light.tertiary,
  };

  return mode === "dark" ? dark : light;
};

export const getThemeOptions = (
  mode: PaletteMode,
  primaryColor: string = "",
  secondaryColor: string = ""
): ThemeOptions => ({
  palette: {
    mode,
    ...getColorOptions(mode),
    ...(Boolean(primaryColor)
      ? {
          primary: {
            main: primaryColor,
          },
          tertiary: {
            main: darken(primaryColor, 0.25),
          },
        }
      : {}),
    ...(Boolean(secondaryColor)
      ? {
          secondary: {
            main: secondaryColor,
          },
        }
      : {}),
  },
  typography: {
    fontFamily: "Avenir, sans-serif",
    fontSize: 14,
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          color: "currentColor",
          fontFamily: "Avenir, sans-serif",
        },
      },
    },
    MuiIcon: {
      styleOverrides: {
        root: {
          color: "currentColor",
          fill: "currentColor",
        },
      },
    },
  },
  breakpoints,
  shape: {
    borderRadius: 10,
  },
});

export default getThemeOptions;
