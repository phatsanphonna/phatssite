import type { Metadata } from "next";
import { IBM_Plex_Sans_Thai } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/react";

const IBMPlexSansThai = IBM_Plex_Sans_Thai({
  weight: ["100", "200", "300", "400", "500", "600", "700"],
  subsets: ["latin", "thai"],
});

export const metadata: Metadata = {
  title: "Phatsanphon Nakaranurak",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${IBMPlexSansThai.className} antialiased`}>
        <div className="min-h-screen gird grid-rows-[auto,1fr,auto]">
          <Navbar />

          <main className="container mx-auto my-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
