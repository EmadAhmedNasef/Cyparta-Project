"use client";
import React, { useContext } from "react";
import { UserContext } from "../_Context/userContext";
import { faEdit } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function EditProfileButton() {
  const { isDisabled, setIsDisabled } = useContext(UserContext);
  const handleButton = () => {
    setIsDisabled(!isDisabled);
  };
  return (
    <>
      <button
        onClick={handleButton}
        className="p-2 bg-black text-white rounded-md"
      >
        <FontAwesomeIcon icon={faEdit} className="mr-2" />
        Edit Profile
      </button>
    </>
  );
}
