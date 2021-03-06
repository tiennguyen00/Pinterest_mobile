import { Dimensions } from "react-native";
const { width, height } = Dimensions.get("window");

// COLOR
export const COLORS = {
  primaryColor: "",
  medium: "#6e6969",
  light: "#f8f4f4",
  dark: "#0c0c0c",
  danger: "#ff5252",

  white: "#ccc",
  black: "#000",
  gray: "#ddd",
  red: "#E60024",
  blue: "#5a97dd",
};

// SIZES
export const SIZES = {
  // font sizes
  logo: 40,
  h1: 30,
  h2: 22,
  h3: 16,
  h4: 14,
  body1: 30,
  body2: 22,
  body3: 16,
  body4: 14,
  body5: 12,

  // app dimensions
  width,
  height,
};

// FONTS
export const FONTS = {
  // logo: { fontFamily: "HoustanderDemo", fontSize: SIZES.logo },
  // h1_bold: { fontFamily: "Quicksand-Bold", fontSize: SIZES.h1, lineHeight: 32 },
  // h3_bold: { fontFamily: "Quicksand-Bold", fontSize: (SIZES.h2+SIZES.h3)/2 },
  h1: { fontFamily: "Roboto-Medium", fontSize: SIZES.h1 },
  h2: { fontFamily: "Roboto-Medium", fontSize: SIZES.h2 },
  h3: { fontFamily: "Roboto-Medium", fontSize: SIZES.h3 },
  h3_thin: { fontFamily: "Roboto-Regular", fontSize: SIZES.h3 },
  h4: { fontFamily: "Roboto-Medium", fontSize: SIZES.h4, lineHeight: 20 },
  // body4: { fontFamily: "sans-serif", fontSize: SIZES.body4 },
  // body5: { fontFamily: "Quicksand-Bold", fontSize: SIZES.body5, lineHeight: 22 }
};

const appTheme = { COLORS, SIZES, FONTS };
export default appTheme;
