"use client";
import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faUser,
  faEnvelope,
  faFileAlt,
  faLock,
} from "@fortawesome/free-solid-svg-icons";
import PersonalInformationForm from "./PersonalInformationForm";

export default function Tabs() {
  const [value, setValue] = useState("Personal Information");
  const [active, setActive] = useState("Personal Information");

  const handleClick = (newValue) => {
    setValue(newValue);
    setActive(newValue);
  };

  return (
    <>
      <div className="border-b border-gray-200">
        <ul className="flex flex-wrap text-sm font-medium text-center">
          <li className="me-2">
            <button
              onClick={() => handleClick("Personal Information")}
              className={`inline-flex items-center justify-center w-full p-4 border-b-2 rounded-t-lg ${
                active === "Personal Information"
                  ? "text-[#EC232B] border-[#EC232B]"
                  : "text-gray-500 border-transparent hover:text-red-600 hover:border-red-500"
              } group`}
            >
              <FontAwesomeIcon
                icon={faUser}
                className={`w-4 h-4 me-2 ${
                  active === "Personal Information"
                    ? "text-[#EC232B]"
                    : "text-gray-400 group-hover:text-red-600"
                }`}
              />
              Personal Information
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => handleClick("Professional Information")}
              className={`inline-flex items-center justify-center w-full p-4 border-b-2 rounded-t-lg ${
                active === "Professional Information"
                  ? "text-[#EC232B] border-[#EC232B]"
                  : "text-gray-500 border-transparent hover:text-red-600 hover:border-red-500"
              } group`}
            >
              <FontAwesomeIcon
                icon={faFileAlt}
                className={`w-4 h-4 me-2 ${
                  active === "Professional Information"
                    ? "text-[#EC232B]"
                    : "text-gray-400 group-hover:text-red-600"
                }`}
              />
              Professional Information
            </button>
          </li>
          <li className="me-2">
            <button
              onClick={() => handleClick("Contact Information")}
              className={`inline-flex items-center justify-center w-full p-4 border-b-2 rounded-t-lg ${
                active === "Contact Information"
                  ? "text-[#EC232B] border-[#EC232B]"
                  : "text-gray-500 border-transparent hover:text-red-600 hover:border-red-500"
              } group`}
            >
              <FontAwesomeIcon
                icon={faEnvelope}
                className={`w-4 h-4 me-2 ${
                  active === "Contact Information"
                    ? "text-[#EC232B]"
                    : "text-gray-400 group-hover:text-red-600"
                }`}
              />
              Contact Information
            </button>
          </li>
          <li>
            <button
              onClick={() => handleClick("Security")}
              className="inline-flex items-center justify-center w-full p-4 text-gray-400 rounded-t-lg cursor-not-allowed"
              disabled
            >
              <FontAwesomeIcon
                icon={faLock}
                className="w-4 h-4 me-2 text-gray-400"
              />
              Security
            </button>
          </li>
        </ul>
      </div>
      {value === "Personal Information" && <PersonalInformationForm />}
      {value === "Professional Information" && (
        <h1>Professional Information</h1>
      )}
      {value === "Contact Information" && <h1>Contact Information</h1>}
    </>
  );
}
