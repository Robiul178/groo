import { Inter, Poppins } from "next/font/google";
import localFont from "next/font/local";
export const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});
export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

// import "slick-carousel/slick/slick.css";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const charter = localFont({
  src: "./fonts/Charter Regular.otf",
  variable: "--charter",
  weight: "100 900",
});

export const myFont = localFont({
  src: [
    {
      path: "./fonts/Charter Regular.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});
export const myFont_two = localFont({
  src: [
    {
      path: "./fonts/Majesti-Banner-Bold.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});
export const neutra = localFont({
  src: [
    {
      path: "./fonts/neutra-text-bold-5871e1605afa2.otf",
      weight: "400",
      style: "normal",
    },
  ],
  display: "swap",
});
