import { Space_Grotesk } from "next/font/google";

/** Single family — weight variations only */
export const fontSans = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600"],
  display: "swap",
});

/** @deprecated Use fontSans — kept for layout import compatibility */
export const fontHeading = fontSans;
export const fontBody = fontSans;
