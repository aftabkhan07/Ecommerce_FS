import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ReduxProvider from './ReduxProvider'; // Import the new client component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html>
      <body className={inter.className}>
        {/* Wrap children with ReduxProvider client component */}
        <ReduxProvider>{children}</ReduxProvider>
      </body>
    </html>
  );
}
