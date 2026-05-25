import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalHeader } from "../components/GlobalHeader";
import { GlobalFooter } from "../components/GlobalFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "Volume Discount App",
  description: "Volume Discount App for Shopify merchants.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <GlobalHeader />
        {children}
        <GlobalFooter />
      </body>
    </html>
  );
}
