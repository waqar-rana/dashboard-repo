import localFont from "next/font/local";
import "./globals.css";
import Script from "next/script";
import NavBottom from "./components/navbottom";
import ToastWrapper from "./components/toastwrapper";
import LoadingBar from "./components/loadingBar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: `Daily Earn Online`,
  description:
    "We provide a platform for you to share your stories with your followers. When your fans click on and engage with your stories, you earn compensation for each click",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0"
        />
        <link rel="icon" sizes="32x32" href="/favicon.ico" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-900 pb-14 md:pb-0`}
      >
        <LoadingBar />
        <ToastWrapper />
        {children}
        <NavBottom />
      </body>
      <Script
        src="https://cdn.lordicon.com/lordicon.js"
        strategy="afterInteractive"
      />
    </html>
  );
}
