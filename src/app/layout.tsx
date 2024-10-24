import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { DirectionProvider } from "@radix-ui/react-direction";
import Providers from "@/providers";

const dana = localFont({
  src: "./fonts/DanaVF.woff",
});

export const metadata: Metadata = {
  title: "فروشیار",
  description: "دستیار فروش شما",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body className={`${dana.className} antialiased`}>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
