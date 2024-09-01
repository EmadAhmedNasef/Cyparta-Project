"use client";

import axios from "axios";
import Cookies from "js-cookie";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserContextProvider({ children }) {
  const [isDisabled, setIsDisabled] = useState(true);
  const [profile, setProfile] = useState(null);
  const [token, setToken] = useState(null);

  useEffect(() => {
    if (Cookies.get("token")) {
      setToken(Cookies.get("token"));
    }
    if (localStorage.getItem("profile")) {
      setProfile(JSON.parse(localStorage.getItem("profile")));
    }
  }, []);

  async function getInfo() {
    const token = Cookies.get("token");
    console.log("Token:", token);

    if (token) {
      await axios
        .get("https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        })
        .then((response) => {
          setProfile(response.data);
          localStorage.setItem("profile", JSON.stringify(response.data));
          console.log("Response:", response.data);
        })
        .catch((error) => {
          console.error("Error fetching profile:", error);
        });
    }
  }

  // useEffect(() => {
  //   getInfo();
  // }, []);

  return (
    <UserContext.Provider
      value={{
        isDisabled,
        setIsDisabled,
        profile,
        setProfile,
        token,
        setToken,
        getInfo,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
