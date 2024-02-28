import type { Metadata } from "next";
import { Vazirmatn } from "next/font/google";
import StoreProvider from "./_lib/StoreProvider";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ["arabic"] });

export const metadata: Metadata = {};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa">
      <body className={vazir.className}>
        <StoreProvider>{children}</StoreProvider>
      </body>
    </html>
  );
}
