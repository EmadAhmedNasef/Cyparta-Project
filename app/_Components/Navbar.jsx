import React from "react";
import imageLogo from "../../public/logo.png";
import Image from "next/image";
import LinksNav from "./LinksNav";

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-screen-xl flex  items-center justify-between mx-auto">
        <Image
          src={imageLogo}
          width={150}
          height={50}
          priority
          alt="Company Logo"
        />
        <div className="md:w-auto w-full">
          <LinksNav />
        </div>
      </div>
    </nav>
  );
}
