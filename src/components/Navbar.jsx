/* eslint-disable no-unused-vars */

import { Link, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { FaGear } from "react-icons/fa6";
import { GoPerson } from "react-icons/go";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Periksa apakah token login ada di localStorage
    const token = localStorage.getItem("token");
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    // Hapus token dari localStorage dan set state isLoggedIn menjadi false
    localStorage.removeItem("token");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="navbar bg-white px-4 fixed top-0 left-0 z-99 w-full text-primary">
      <div className="navbar-start">
        {/* Drop down */}
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 gap-2 bg-white text-sm md:text-base"
          >
            <li>
              <Link to="/" className="bg-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/service" className="bg-white">
                Pemesanan
              </Link>
            </li>
            <li>
              <Link to="/about" className="bg-white">
                Tentang Kami
              </Link>
            </li>
          </ul>
        </div>
        {/* Logo */}
        <Link to="/">
          <div className="flex items-center space-x-2">
            <div className="rounded-full bg-primary p-2">
              <FaGear className="text-white" />
            </div>
            <span className="text-base md:text-lg lg:text-xl font-bold text-primary">
              Carlos Tech
            </span>
          </div>
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex font-medium">
        <ul className="menu menu-horizontal px-1 gap-4 text-sm md:text-base lg:text-lg">
          <li>
            <Link to="/" className="hover:bg-primary hover:text-white">
              Home
            </Link>
          </li>
          <li>
            <Link to="/service" className="hover:bg-primary hover:text-white">
              Pemesanan
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:bg-primary hover:text-white">
              Tentang Kami
            </Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        {isLoggedIn ? (
          <div className="flex items-center gap-2">
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              >
                <div className="w-10 rounded-full">
                  <GoPerson className="w-10 h-10 hover:bg-primary hover:text-white" />
                </div>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-white text-primary rounded-box z-[1] mt-3 w-52 p-2 shadow text-sm md:text-base"
              >
                <li>
                  <Link
                    to="/profile"
                    className="hover:bg-primary hover:text-white"
                  >
                    Profile
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="hover:bg-primary hover:text-white"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          </div>
        ) : (
          <>
            <Link
              className="btn btn-ghost mr-3 hover:bg-primary hover:text-white text-sm md:text-base"
              to="/register"
            >
              Daftar
            </Link>
            <Link
              className="btn btn-ghost hover:bg-primary hover:text-white text-sm md:text-base"
              to="/login"
            >
              Masuk
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default Navbar;
