import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import PageHeader from "@/app/components/PageHeader";

const monasans = localFont({
  src: [
    {
      path: "./assets/fonts/MonaSans-Medium.woff2",
      weight: "500",
      style: "normal",
    },
    {
      path: "./assets/fonts/MonaSans-Bold.woff2",
      weight: "700",
      style: "normal",
    },
  ],
});

export const metadata: Metadata = {
  title: "Parallel Universe Archive",
  description: "A collection of games I've played and recommend.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={monasans.className}>
        <div className="absolute inset-0 bg-no-repeat bg-auto bg-right-top body-gr-bg z-0"></div>
        <PageHeader />
        <main className="flex min-h-screen flex-col items-start justify-start px-4 lg:px-12 py-12 relative z-10">
          {children}
        </main>
      </body>
    </html>
  );
}
