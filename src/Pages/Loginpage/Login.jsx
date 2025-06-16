/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { FaWrench, FaArrowCircleLeft } from "react-icons/fa";
import { FiMail, FiLock } from "react-icons/fi";

import CarlosTech from "../../assets/carlos-tech.png";
import LandingLayout from "../Landingpage/Layout/LandingLayout";
import usePasswordVisibility from "../Landingpage/Hooks/usePasswordVisibility";
import { useAuth } from "../../Routes/AuthContext";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();
  const { login } = useAuth();
  const { showPassword, PasswordVisibilityIcon } = usePasswordVisibility();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        "http://localhost:3000/api/v1/auth/login",
        {
          email,
          password,
        }
      );

      const { token, user } = response.data.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      login(user);

      navigate(user.role === "admin" ? "/admin" : "/");
    } catch (err) {
      setError("Login gagal. Silakan coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LandingLayout>
      <div className="absolute top-4 left-4">
        <a href="/">
          <FaArrowCircleLeft className="text-primary text-2xl" />
        </a>
      </div>

      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md p-8 bg-white rounded-xl shadow-xl">
          <div className="text-center mb-6">
            <img
              src={CarlosTech}
              alt="CarlosTech"
              className="w-1/3 mx-auto mb-3"
            />
            <h2 className="text-2xl font-bold text-primary">
              Masuk ke Akun Anda
            </h2>
          </div>

          <form onSubmit={handleLogin} className="space-y-5">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block mb-1 text-sm font-medium text-primary"
              >
                Email
              </label>
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500">
                  <FiMail />
                </span>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  className="w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="nama@email.com"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block mb-1 text-sm font-medium text-primary"
              >
                Password
              </label>
              <div className="relative">
                <span className="absolute top-1/2 -translate-y-1/2 left-3 text-gray-500">
                  <FiLock />
                </span>
                <input
                  type={showPassword.password ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                  className="w-full pl-10 pr-10 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  placeholder="Password"
                />
                {PasswordVisibilityIcon("password")}
              </div>
            </div>

            {error && <p className="text-sm text-red-500">{error}</p>}

            <button
              type="submit"
              className="w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-opacity-90 transition"
              disabled={loading}
            >
              {loading ? "Loading..." : "Masuk"}
            </button>

            <p className="text-sm font-normal text-primary text-center">
              Belum punya akun?{" "}
              <a
                href="/register"
                className="font-medium text-primary hover:underline"
              >
                Daftar
              </a>
            </p>
          </form>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Login;
