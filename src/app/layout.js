import { Inter } from "next/font/google";
import "./globals.css";
import { ReduxProvider } from "@/redux/provider";
import "@fortawesome/fontawesome-free/css/all.min.css";
// import { Toaster } from "react-hot-toast";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>Somali ABC Kids</title>
      </head>
      <body className="sidebar-mini layout-fixed control-sidebar-slide-open layout-navbar-fixed sidebar-mini-md sidebar-mini-xs text-sm">
        <main className="wrapper">
          {/* <Toaster /> */}
          <ReduxProvider>{children}</ReduxProvider>
        </main>
      </body>
    </html>
  );
}
