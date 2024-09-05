import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom"; // Import useHistory for navigation
import AuthContext from "../context/AuthContext";
import Navbar from "../components/Navbar";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { loginUser } = useContext(AuthContext);
  const history = useNavigate(); // Initialize useHistory

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(email, password);
  };

  const handleClose = () => {
    history("/"); // Redirect to home page
  };

  return (
    <div className="">
      <Navbar />
      <div className="auth-background">
        <div className="relative w-11/12 max-w-md p-4 space-y-8 bg-white rounded-lg shadow-lg">
          <button
            onClick={handleClose}
            className="absolute top-2 right-2 text-gray-500 hover:text-black"
          >
            <FaTimes />
          </button>
          <h1 className="text-3xl font-bold text-center text-black">
            Login to Account
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
            <div>
              <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                className="w-full px-4 py-2 text-black bg-gray-100 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-gray-400"
              />
            </div>
            <button
              type="submit"
              className="w-full px-4 py-2 text-white bg-black rounded hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-600"
            >
              Login
            </button>
          </form>
          <div className="text-center text-black">
            <p>
              <Link to="/request/password-reset" className="">Click to Reset Password!</Link>
            </p>
            <p>
              Don't have an account?{" "}
              <a
                href="/register"
                className="text-black underline hover:text-gray-700"
              >
                Register here
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
