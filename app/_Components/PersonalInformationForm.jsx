"use client";
import { useFormik } from "formik";
import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { UserContext } from "../_Context/userContext";
import Cookies from "js-cookie";

export default function PersonalInformationForm() {
  const { profile, isDisabled, setProfile } = useContext(UserContext);

  useEffect(() => {
    if (profile) {
      formik.setValues({
        first_name: profile.first_name || "",
        last_name: profile.last_name || "",
        phone: profile.phone || "",
        email: profile.email || "",
        bio: profile.bio || "",
      });
    }
  }, [profile]);

  const handleSubmit = (values) => {
    axios
      .patch(
        "https://cyparta-backend-gf7qm.ondigitalocean.app/api/profile/",
        values,
        {
          headers: {
            Authorization: `Bearer ${Cookies.get("token")}`,
          },
        }
      )
      .then((response) => {
        console.log("Response:", response.data);
        setProfile(response.data);
        localStorage.setItem("profile", JSON.stringify(response.data));
      });
    console.log("Form data:", values);
  };

  const formik = useFormik({
    initialValues: {
      first_name: "",
      last_name: "",
      phone: "",
      email: "",
      bio: "",
    },
    onSubmit: handleSubmit,
  });

  return (
    <form onSubmit={formik.handleSubmit} className="mt-6 space-y-4 p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">First Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            name="first_name"
            value={formik.values.first_name}
            onChange={formik.handleChange}
            disabled={isDisabled}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Last Name</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            name="last_name"
            value={formik.values.last_name}
            onChange={formik.handleChange}
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">
            Mobile Number
          </label>
          <input
            type="tel"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            name="phone"
            value={formik.values.phone}
            onChange={formik.handleChange}
            disabled={isDisabled}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Email</label>
          <input
            type="email"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            name="email"
            value={formik.values.email}
            onChange={formik.handleChange}
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">
            Date of Birth
          </label>
          <input
            type="date"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">
            Marital Status
          </label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Gender</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Nationality</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Address</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">City</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">State</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Zipcode</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block mb-1 text-sm font-medium">Work Hours</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
        <div>
          <label className="block mb-1 text-sm font-medium">Salary/Hour</label>
          <input
            type="text"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            disabled={isDisabled}
          />
        </div>
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Total Salary</label>
        <input
          type="text"
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          disabled={isDisabled}
        />
      </div>
      <div>
        <label className="block mb-1 text-sm font-medium">Bio</label>
        <textarea
          className="w-full px-3 py-2 border border-gray-300 rounded-md"
          name="bio"
          value={formik.values.bio}
          onChange={formik.handleChange}
          disabled={isDisabled}
        />
      </div>
      <button
        type="submit"
        className="w-full py-2 bg-blue-500 text-white rounded-md"
      >
        Save
      </button>
    </form>
  );
}
