import "./globals.css";
import { Inter } from "next/font/google";
import { GlobalHeader } from "../components/GlobalHeader";
import { GlobalFooter } from "../components/GlobalFooter";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  title: "VolumeX | Shopify Volume Discount App",
  description:
    "Create quantity breaks, customer-specific offers, and storefront-ready volume discounts for Shopify with VolumeX.",
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
