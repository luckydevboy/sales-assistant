import type { Metadata } from "next";
import localFont from "next/font/local";

import Providers from "@/providers";
import "./globals.css";
import { AppSidebar } from "@/components";
import { SidebarTrigger } from "@/components/ui";

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
        <Providers>
          <AppSidebar />
          <main className="px-4 mt-4">
            <SidebarTrigger />
            <div className="mt-2 mx-1.5">{children}</div>
          </main>
        </Providers>
      </body>
    </html>
  );
}
