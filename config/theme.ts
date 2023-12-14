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
      main: "#FA8320",
    },
    secondary: {
      main: "#5DC268",
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
    info: {
      main: "#355CF4",
    },
    text: {
      primary: "rgba(0, 0, 0, 0.87)",
      secondary: "rgba(0, 0, 0, 0.6)",
      disabled: "rgba(0, 0, 0, 0.38)",
    },
    background: {},
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
    fontSize: 16, // NOTE: default font-size of MUI is 14px
    h1: {
      fontFamily: "Avenir, sans-serif",
      fontSize: 49,
      fontWeight: 700,
      lineHeight: "130%",
    },
    h2: {
      fontFamily: "Avenir, sans-serif",
      fontSize: 39,
      fontWeight: 700,
      lineHeight: "130%",
    },
    h3: {
      fontFamily: "Avenir, sans-serif",
      fontSize: 31,
      fontWeight: 700,
      lineHeight: "150%",
    },
    h4: {
      fontFamily: "Avenir, sans-serif",
      fontSize: 25,
      fontWeight: 700,
      lineHeight: "150%",
    },
    h5: {
      fontFamily: "Avenir, sans-serif",
      fontSize: 20,
      fontWeight: 600,
      lineHeight: "150%",
    },
    h6: {
      fontFamily: "Avenir, sans-serif",
      fontSize: 18,
      fontWeight: 600,
      lineHeight: "150%",
    },
    body1: {
      fontFamily: "Avenir, sans-serif",
      fontSize: 16,
    },
    body2: {
      fontFamily: "Avenir, sans-serif",
      fontSize: 14,
    },
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
