import Image from "next/image";
import React from "react";
import imageLogo from "../../public/logo.png";
import LinksNav from "./LinksNav";

export default function SideBar() {
  return (
    <aside className="sidebar h-screen bg-white">
      <div className="p-4 flex justify-center items-center">
        <Image
          src={imageLogo}
          width={150}
          height={50}
          priority
          alt="Company Logo"
          className="hidden md:block"
        />
      </div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <LinksNav />
        </ul>
      </nav>
    </aside>
  );
}
