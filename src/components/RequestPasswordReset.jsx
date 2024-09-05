// ForgotPassword.jsx

import React, { useState } from "react";
import Swal from 'sweetalert2';
import Navbar from "./Navbar";


const RequestPasswordReset = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${process.env.API_URL}/password-reset/`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ email })
      });

      if (response.ok) {
        Swal.fire({
          title: "Reset link sent",
          icon: "success",
          toast: true,
          timer: 6000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false
        });
      } else {
        Swal.fire({
          title: "Email not found",
          icon: "error",
          toast: true,
          timer: 6000,
          position: 'top-right',
          timerProgressBar: true,
          showConfirmButton: false
        });
      }
    } catch (error) {
      console.error("Request failed:", error);
      Swal.fire({
        title: "Network or Server Error",
        icon: "error",
        toast: true,
        timer: 6000,
        position: 'top-right',
        timerProgressBar: true,
        showConfirmButton: false
      });
    }
  };

  return (
    <div>
      <Navbar />
      <div className="fixed inset-0 flex items-start mt-20 justify-center bg-gray-500 bg-opacity-50 z-50">
        <div className="relative w-11/12 max-w-md p-8 space-y-8 bg-white rounded-lg shadow-lg">
          <h1 className="text-3xl font-bold text-center text-black">
            Forgot Password
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-2 text-black bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Send Reset Link
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RequestPasswordReset
