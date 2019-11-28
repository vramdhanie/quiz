import baseStyled, { ThemedStyledInterface } from "styled-components";

export const lightTheme = {
  all: {
    white: "#FFFFFF",
    black: "#000000",
    mainTransition: "all 0.3s linear",
    mainSpacing: "4px",
    lightShadow: "2px 5px 3px 0px rgba(0, 0, 0, 0.5)",
    darkShadow: "4px 10px 5px 0px rgba(0, 0, 0, 0.5)",
    lightBorder: "0 0 2px 0px rgba(0, 0, 0, 0.2)"
  },
  primary: {
    main: "#009688",
    light: "#52c7b8",
    dark: "#00675b",
    text: "#000000"
  },
  secondary: {
    main: "#FF6E40",
    light: "#FFA06d",
    dark: "#C53d13",
    text: "#000000"
  }
};

export const darkTheme: Theme = {
  all: {
    ...lightTheme.all
  },
  primary: {
    main: "#37474F",
    light: "#62727B",
    dark: "#102027",
    text: "#FFFFFF"
  },
  secondary: {
    main: "#2196F3",
    light: "#6EC6FF",
    dark: "#0069C0",
    text: "#FFFFFF"
  }
};

export type Theme = typeof lightTheme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
