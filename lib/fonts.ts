import { Cormorant_Garamond, Outfit } from "next/font/google";

export const fontSerif = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500"],
  style: "normal",
  variable: "--font-cormorant",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});

export const fontSans = Outfit({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-outfit",
  display: "swap",
  adjustFontFallback: true,
  preload: true,
});
