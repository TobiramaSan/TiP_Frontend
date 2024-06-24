"use client";

import localFont from "next/font/local";
import { Provider as ReduxProvider } from "react-redux";
import { Epilogue } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import { usePathname } from "next/navigation";
import Home from "./page";
import { store } from "@/redux/store";

const epilogue = Epilogue({ subsets: ["latin"], variable: "--font-epilogue" });

const clash = localFont({
  src: [
    {
      path: "../../public/fonts/ClashDisplay-Regular.woff2",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Medium.woff2",
      weight: "500",
      style: "italic",
    },
    {
      path: "../../public/fonts/ClashDisplay-Semibold.woff2",
      weight: "600",
      style: "normal",
    },
    {
      path: "../../public/fonts/ClashDisplay-Bold.woff2",
      weight: "700",
      style: "italic",
    },
  ],
  variable: "--font--clash",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  return (
    <html lang="en">
      <body className={`${clash.variable} ${epilogue.className}`}>
        <ReduxProvider store={store}>
          <Navbar />
          {children}
          {pathname !== "/login" && pathname !== "/sign-up" && <Footer />}
        </ReduxProvider>
      </body>
    </html>
  );
}
