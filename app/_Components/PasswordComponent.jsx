"use client";
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

export default function PasswordComponent() {
  const [passwordVisible, setPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };
  return (
    <div className="mb-6 relative">
      <label
        htmlFor="password"
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        Password
      </label>
      <input
        type={passwordVisible ? "text" : "password"}
        id="password"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 pr-10"
        placeholder="•••••••••"
        name="password"
      />
      <div
        className="absolute top-[40px] right-0 flex items-center pr-3 cursor-pointer"
        onClick={togglePasswordVisibility}
      >
        <FontAwesomeIcon
          icon={passwordVisible ? faEyeSlash : faEye}
          className="text-gray-500"
        />
      </div>
    </div>
  );
}
