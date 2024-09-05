// ResetPassword.jsx

import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Navbar from "../components/Navbar";

const ResetPassword = () => {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const { uidb64, token } = useParams();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.API_URL}/password-reset-confirm/${uidb64}/${token}/`;

    if (password !== confirmPassword) {
      Swal.fire({
        title: "Passwords do not match",
        icon: "error",
        toast: true,
        timer: 6000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
      return;
    }

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password }),
      });

      if (response.ok) {
        Swal.fire({
          title: "Password reset successful",
          icon: "success",
          toast: true,
          timer: 6000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
        navigate("/login");
      } else {
        Swal.fire({
          title: "Invalid or expired token",
          icon: "error",
          toast: true,
          timer: 6000,
          position: "top-right",
          timerProgressBar: true,
          showConfirmButton: false,
        });
      }
    } catch (error) {
      console.error("Request failed:", error);
      Swal.fire({
        title: "Network or Server Error",
        icon: "error",
        toast: true,
        timer: 6000,
        position: "top-right",
        timerProgressBar: true,
        showConfirmButton: false,
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="fixed inset-0 flex items-start mt-20 justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="relative w-11/12 max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-black">
            Reset Password
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="password"
                placeholder="New Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 text-black bg-gray-100 border border-gray-300 rounded focus focus focus"
              />{" "}
            </div>{" "}
            <div>
              {" "}
              <input
                type="password"
                placeholder="Confirm New Password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
                className="w-full px-4 py-2 text-black bg-gray-100 border border-gray-300 rounded focus focus focus"
              />{" "}
            </div>{" "}
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              {" "}
              Reset Password{" "}
            </button>{" "}
          </form>{" "}
        </div>{" "}
      </div>{" "}
    </div>
  );
};

export default ResetPassword;
