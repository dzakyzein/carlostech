/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import axios from 'axios';
import CarlosTech from '../../assets/carlos-tech.png';
import { FaArrowCircleLeft } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../Routes/AuthContext';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/auth/login',
        {
          email,
          password,
        }
      );

      const { token, user } = response.data.data;
      localStorage.setItem('token', token);
      localStorage.setItem('user', JSON.stringify(user));

      login(user);

      navigate(user.role === 'admin' ? '/admin' : '/');
    } catch (err) {
      setError('Login gagal. Silakan coba lagi.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className='bg-gray-50 dark:bg-gray-900'>
      <div className='absolute top-4 left-4'>
        <a href='/'>
          <FaArrowCircleLeft />
        </a>
      </div>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a className='flex justify-center' href='/'>
          <img className='w-1/3' src={CarlosTech} alt='logo' />
        </a>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8 bg-black'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Masuk ke akunmu
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleLogin}>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  placeholder='nama@gmail.com'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>
              <div>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <input
                  type='password'
                  name='password'
                  id='password'
                  placeholder='password'
                  className='bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>
              {error && <p className='text-sm text-red-500'>{error}</p>}
              <button
                type='submit'
                className='w-full text-white bg-slate-700 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Masuk'}
              </button>
              <p className='text-sm font-light text-gray-500 dark:text-gray-400'>
                Belum punya akun?{' '}
                <a
                  href='/register'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Daftar
                </a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
