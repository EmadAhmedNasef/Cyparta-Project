import React from "react";
import EditProfileButton from "./EditProfileButton";
import InfoData from "./InfoData";

export default function Info() {
  return (
    <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 space-y-4 md:space-y-0">
      <InfoData />
      <div className="md:ml-4">
        <EditProfileButton />
      </div>
    </div>
  );
}
