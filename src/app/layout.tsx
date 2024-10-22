import type { Metadata } from "next";
import "./globals.css";
import { poppins } from "@/config/fonts";



export const metadata: Metadata = {
  title: "NOX",
  description: "NOX - prueba técnica",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.className} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
