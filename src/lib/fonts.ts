import {
  Bebas_Neue,
  Geist_Mono,
  Inter,
  Playfair_Display,
} from "next/font/google";

const sans = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
  weight: "variable",
  adjustFontFallback: true,
});

const serif = Playfair_Display({
  variable: "--font-serif",
  subsets: ["latin"],
  display: "swap",
  weight: ["400"],
  adjustFontFallback: true,
});

const mono = Geist_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: "variable",
  display: "swap",
  adjustFontFallback: true,
});

const display = Bebas_Neue({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
  adjustFontFallback: true,
});

const join = (items: string[]) => items.join(" ");

const fonts = join([
  sans.variable,
  serif.variable,
  mono.variable,
  display.variable,
]);

export default fonts;
