import "./globals.css";
import { Inter } from "next/font/google";
import Header from "./components/commons/Header";

import SidebarLeft from "./components/commons/SidebarLeft";
import SidebarRight from "./components/commons/SidebarRight";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Clarence Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header />
        <div className="flex min-w-screen mx-auto min-h-screen">
          <SidebarLeft />
          <div className="flex-1">{children}</div>
          <SidebarRight />
        </div>
      </body>
    </html>
  );
}
