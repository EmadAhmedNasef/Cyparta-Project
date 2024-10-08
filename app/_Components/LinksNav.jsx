"use client";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faSignInAlt,
  faUser,
  faSignOutAlt,
} from "@fortawesome/free-solid-svg-icons";
import React, { useContext } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../_Context/userContext";
import { toast, ToastContainer } from "react-toastify";

export default function LinksNav() {
  const path = usePathname();
  const router = useRouter();
  const { token, setProfile, setToken } = useContext(UserContext);

  const handleLogout = () => {
    Cookies.remove("token");
    localStorage.removeItem("profile");
    setProfile(null);
    setToken(null);
    toast.success("you logged out successfully", {
      position: "top-right",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
    setTimeout(() => {
      router.push("/login");
    }, 3000);
  };

  return (
    <ul className="font-medium flex flex-col space-y-2 w-full">
      <li>
        <Link
          href="/profile"
          className={`flex items-center space-x-2 p-2 rounded hover:bg-gray-200 ${
            path === "/profile" ? "bg-gray-200" : ""
          }`}
        >
          <FontAwesomeIcon icon={faUser} className="text-gray-600" />
          <span>Profile</span>
        </Link>
      </li>

      {token ? (
        <li>
          <a
            onClick={handleLogout}
            className={`flex items-center space-x-2 p-2 rounded hover:bg-gray-200 cursor-pointer`}
          >
            <FontAwesomeIcon icon={faSignOutAlt} className="text-gray-600" />
            <span>Logout</span>
          </a>
        </li>
      ) : (
        <li>
          <Link
            href="/login"
            className={`flex items-center space-x-2 p-2 rounded hover:bg-gray-200 ${
              path === "/login" ? "bg-gray-200" : ""
            }`}
          >
            <FontAwesomeIcon icon={faSignInAlt} className="text-gray-600" />
            <span>Login</span>
          </Link>
        </li>
      )}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </ul>
  );
}
