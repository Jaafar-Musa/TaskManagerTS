import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import localFont from "next/font/local";
import { siteConfig } from "@/config/site";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s | ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons:[{url:"/logo.svg",href:"/logo.svg"}]
};

const headingFont = localFont({
  src: "../public/fonts/font.woff2",
  variable: "--font-custom",
});
const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} ${headingFont.variable} ${poppins.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
