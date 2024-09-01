import { Inter } from "next/font/google";
import "./globals.css";
import SideBar from "./_Components/SideBar";
import UserContextProvider from "./_Context/userContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Cyparta Software Empire",
  description:
    "this project for cyparta software empire.user can login and see his profile",
};

export default function RootLayout({ children }) {
  return (
    <UserContextProvider>
      <html lang="en">
        <body className={inter.className}>
          <div className="grid grid-cols-12 h-screen">
            <div className="col-span-3 shadow-lg">
              <SideBar />
            </div>
            <main className="col-span-9 p-6">{children}</main>
          </div>
        </body>
      </html>
    </UserContextProvider>
  );
}
