"use client";
import React, { useContext, useState } from "react";
import logoImg from "../../public/logo.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useFormik } from "formik";
import * as Yup from "yup";
import axios from "axios";
import Cookies from "js-cookie";
import { UserContext } from "../_Context/userContext";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [error, setError] = useState(null);
  const { setProfile, setToken, getInfo } = useContext(UserContext);
  const router = useRouter();

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  const mySchema = Yup.object().shape({
    email: Yup.string()
      .email("Invalid email address")
      .required("Email is required"),
    password: Yup.string().required("Password is required"),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: mySchema,
    onSubmit: handleSubmit,
  });

  async function handleSubmit(values) {
    const params = new URLSearchParams();
    params.append("email", values.email);
    params.append("password", values.password);
    console.log("Form data:", params.toString(), params);

    try {
      const response = await axios.post(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/login/",
        params.toString(),
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded",
          },
        }
      );
      console.log("Response:", response.data);
      if (response.status === 200) {
        Cookies.set("token", response.data.access, { expires: 7 });
        setToken(response.data.access);
        await getInfo();
        router.push("/profile");
      }
    } catch (error) {
      setError("Invalid email or password");
      console.error("Error:", error);
    }
  }

  return (
    <div className="flex justify-center items-center flex-col p-4 md:p-0">
      <Image src={logoImg} width={225} height="auto" alt="logo" priority />
      <div className="w-full max-w-md border border-[#E9E9E9] rounded-lg p-6 md:p-8 bg-white">
        <form onSubmit={formik.handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="block mb-2 text-sm font-medium text-gray-900"
            >
              Email address
            </label>
            <input
              type="email"
              id="email"
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
              placeholder="john.doe@company.com"
              name="email"
              onChange={formik.handleChange}
              value={formik.values.email}
            />
            {formik.errors.email && formik.touched.email ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.email}
              </div>
            ) : null}
          </div>
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
              onChange={formik.handleChange}
              value={formik.values.password}
            />
            {formik.errors.password && formik.touched.password ? (
              <div className="text-red-500 text-sm mt-1">
                {formik.errors.password}
              </div>
            ) : null}
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
          {error && (
            <div className="text-red-500 text-sm mb-6 text-center">{error}</div>
          )}
          <button
            type="submit"
            className="text-white bg-black font-medium rounded-lg text-sm w-full px-5 py-2.5 text-center"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
