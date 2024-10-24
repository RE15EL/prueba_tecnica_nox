import { Poppins, Lato, Inter } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const lato = Lato({
  subsets: ["latin"],
  weight: "400",
});
