import type { Metadata, Viewport } from "next";
import {
  AppleWebApp,
  FormatDetection,
} from "next/dist/lib/metadata/types/extra-types";
import { OpenGraph } from "next/dist/lib/metadata/types/opengraph-types";
import { Twitter } from "next/dist/lib/metadata/types/twitter-types";
import { Vazirmatn } from "next/font/google";
import StoreProvider from "./_lib/StoreProvider";
import "./globals.css";

const vazir = Vazirmatn({ subsets: ["arabic"] });

export const viewport: Viewport = {
  minimumScale: 1,
  initialScale: 1,
  width: "device-width",
  userScalable: false,
  viewportFit: "cover",
};

const appleWebApp: AppleWebApp = {
  capable: true,
  statusBarStyle: "default",
  title: "Air App",
  startupImage: undefined, //TODO
};

const formatDetection: FormatDetection = {
  telephone: false,
};

const twitter: Twitter = {
  title: "Air App",
  description: "The ultimate weather companion",
};

const openGraph: OpenGraph = {
  title: "Air App",
  description: "The ultimate weather companion",
};

export const metadata: Metadata = {
  applicationName: "Air App",
  appleWebApp,
  description: "The ultimate weather companion",
  formatDetection,
  manifest: "/manifest.json",
  twitter,
  openGraph,
};

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
