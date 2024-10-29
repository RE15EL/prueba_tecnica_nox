import { Poppins, Lato, Inter, Roboto } from "next/font/google";

export const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
});

export const roboto = Roboto({
  subsets: ["latin"],
  weight: ["500", "700"],
});
