import { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FiMail, FiLock, FiUser } from "react-icons/fi";

import LandingLayout from "../Landingpage/Layout/LandingLayout";
import CarlosTech from "../../assets/carlos-tech.png";
import usePasswordVisibility from "../Landingpage/Hooks/usePasswordVisibility";
import { BACKEND_URL } from "../../Constants";

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    passwordConfirm: "",
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const { showPassword, PasswordVisibilityIcon } = usePasswordVisibility();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "name") {
      const isAlphabetic = /^[A-Za-z ]*$/.test(value); // termasuk spasi
      if (!isAlphabetic) return;
    }
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const res = await axios.post(`${BACKEND_URL}/v1/auth/register`, formData);
      console.log(res.data);
      window.location.href = "/login";
    } catch (err) {
      console.error(err);
      setError("Gagal membuat akun. Coba lagi.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <LandingLayout>
      <div className='absolute top-4 left-4'>
        <a href='/'>
          <FaArrowCircleLeft className='text-primary text-2xl' />
        </a>
      </div>

      <div className='min-h-screen flex items-center justify-center px-4'>
        <div className='w-full max-w-md p-8 bg-white rounded-xl shadow-xl'>
          <div className='text-center mb-6'>
            <img
              src={CarlosTech}
              alt='CarlosTech'
              className='w-1/3 mx-auto mb-3'
            />
            <h2 className='text-2xl font-bold text-primary'>Buat Akun Baru</h2>
          </div>

          <form onSubmit={handleSubmit} className='space-y-5'>
            {/* Nama */}
            <div>
              <label
                htmlFor='name'
                className='block mb-1 text-sm font-medium text-primary'
              >
                Nama
              </label>
              <div className='relative'>
                <span className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-500'>
                  <FiUser />
                </span>
                <input
                  type='text'
                  id='name'
                  name='name'
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder='John Doe'
                  className='w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>
            </div>

            {/* Email */}
            <div>
              <label
                htmlFor='email'
                className='block mb-1 text-sm font-medium text-primary'
              >
                Email
              </label>
              <div className='relative'>
                <span className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-500'>
                  <FiMail />
                </span>
                <input
                  type='email'
                  id='email'
                  name='email'
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder='nama@email.com'
                  className='w-full pl-10 pr-4 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary'
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor='password'
                className='block mb-1 text-sm font-medium text-primary'
              >
                Password
              </label>
              <div className='relative'>
                <span className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-500'>
                  <FiLock />
                </span>
                <input
                  type={showPassword.password ? "text" : "password"}
                  id='password'
                  name='password'
                  value={formData.password}
                  onChange={handleChange}
                  required
                  placeholder='Password'
                  className='w-full pl-10 pr-10 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary'
                />
                {PasswordVisibilityIcon("password")}
              </div>
            </div>

            {/* Konfirmasi Password */}
            <div>
              <label
                htmlFor='passwordConfirm'
                className='block mb-1 text-sm font-medium text-primary'
              >
                Konfirmasi Password
              </label>
              <div className='relative'>
                <span className='absolute top-1/2 -translate-y-1/2 left-3 text-gray-500'>
                  <FiLock />
                </span>
                <input
                  type={showPassword.passwordConfirm ? "text" : "password"}
                  id='passwordConfirm'
                  name='passwordConfirm'
                  value={formData.passwordConfirm}
                  onChange={handleChange}
                  required
                  placeholder='Konfirmasi Password'
                  className='w-full pl-10 pr-10 py-2 border rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-primary'
                />
                {PasswordVisibilityIcon("passwordConfirm")}
              </div>
            </div>

            {error && <p className='text-sm text-red-500'>{error}</p>}

            <button
              type='submit'
              className='w-full bg-primary text-white font-semibold py-2 rounded-md hover:bg-opacity-90 transition'
              disabled={loading}
            >
              {loading ? "Loading..." : "Buat Akun"}
            </button>

            <p className='text-sm text-center text-primary'>
              Sudah punya akun?{" "}
              <Link
                to='/login'
                className='text-primary font-medium hover:underline'
              >
                Masuk
              </Link>
            </p>
          </form>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Register;
