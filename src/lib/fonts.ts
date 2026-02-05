import { Geist, Geist_Mono } from "next/font/google";

const sans = Geist({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  adjustFontFallback: true,
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  adjustFontFallback: true,
});

const join = (items: string[]) => items.join(" ");

const fonts = join([sans.variable, mono.variable]);

export default fonts;
