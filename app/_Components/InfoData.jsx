"use client";
import Image from "next/image";
import React, { useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser, faEnvelope } from "@fortawesome/free-solid-svg-icons";
import imageProfile from "../../public/profile.png";
import { UserContext } from "../_Context/userContext";

export default function InfoData() {
  const { profile } = useContext(UserContext);
  return (
    <div className="flex gap-4 items-center mb-8">
      <Image
        src={profile?.image || imageProfile}
        width={100}
        height={100}
        priority
        alt="image-profile"
        className="w-[50px] h-[50px] sm:w-[100px] sm:h-[100px]"
      />
      <div className="flex flex-col">
        <h1 className="text-xl font-semibold">
          {profile
            ? `${profile.first_name} ${profile.last_name}`
            : "Mariam Ali"}
        </h1>
        <p className="flex items-center text-gray-600">
          <FontAwesomeIcon icon={faUser} className="mr-2" />
          Frontend Developer
        </p>
        <p className="flex items-center text-gray-600">
          <FontAwesomeIcon icon={faEnvelope} className="mr-2" />
          {profile ? profile.email : "mariam@gmail.com"}
        </p>
      </div>
    </div>
  );
}
