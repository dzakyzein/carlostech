import { useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import usePasswordVisibility from '../Landingpage/Hooks/usePasswordVisibility';

import BgMachine from '../../assets/bg-machine.png';
import CarlosTech from '../../assets/carlos-tech.png';
import { FaArrowCircleLeft } from 'react-icons/fa';

const Register = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    passwordConfirm: '',
  });

  const [loading, setLoading] = useState(false);
  const { showPassword, PasswordVisibilityIcon } = usePasswordVisibility();

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'name') {
      const isAlphabetic = /^[A-Za-z]*$/.test(value);
      if (!isAlphabetic) return;
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/auth/register',
        formData
      );
      console.log(response.data); // Handle successful registration response
      window.location.href = '/login';
    } catch (error) {
      console.error('Error registering user:', error);
      // Handle error: show error message to user
    } finally {
      setLoading(false);
    }
  };

  return (
    <section
      className='bg-center bg-cover bg-no-repeat'
      style={{ backgroundImage: `url(${BgMachine})` }}
    >
      <div className='absolute top-4 left-4'>
        <a href='/'>
          <FaArrowCircleLeft />
        </a>
      </div>
      <div className='flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0'>
        <a className='flex justify-center' href='/'>
          <img className='items-center w-1/3' src={CarlosTech} alt='logo' />
        </a>
        <div className='w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 text-black'>
          <div className='p-6 space-y-4 md:space-y-6 sm:p-8'>
            <h1 className='text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white'>
              Buat akun baru
            </h1>
            <form className='space-y-4 md:space-y-6' onSubmit={handleSubmit}>
              <div>
                <label
                  htmlFor='name'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Nama
                </label>
                <input
                  type='text'
                  name='name'
                  id='name'
                  value={formData.name}
                  onChange={handleChange}
                  className='bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  placeholder='John Doe'
                  required
                  pattern='[A-Za-z]+'
                />
              </div>
              <div>
                <label
                  htmlFor='email'
                  className='block mb-2 text-sm font-medium text-gray-900'
                >
                  Email
                </label>
                <input
                  type='email'
                  name='email'
                  id='email'
                  value={formData.email}
                  onChange={handleChange}
                  className='bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                  placeholder='nama@gmail.com'
                  required
                />
              </div>
              <div className='relative'>
                <label
                  htmlFor='password'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Password
                </label>
                <div className='relative'>
                  <input
                    type={showPassword.password ? 'text' : 'password'}
                    name='password'
                    id='password'
                    value={formData.password}
                    onChange={handleChange}
                    placeholder='password'
                    className='bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    required
                  />
                  {PasswordVisibilityIcon('password')}
                </div>
              </div>
              <div className='relative'>
                <label
                  htmlFor='passwordConfirm'
                  className='block mb-2 text-sm font-medium text-gray-900 dark:text-white'
                >
                  Konfirmasi password
                </label>
                <div className='relative'>
                  <input
                    type={showPassword.passwordConfirm ? 'text' : 'password'}
                    name='passwordConfirm'
                    id='passwordConfirm'
                    value={formData.passwordConfirm}
                    onChange={handleChange}
                    placeholder='password'
                    className='bg-white border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5'
                    required
                  />
                  {PasswordVisibilityIcon('passwordConfirm')}
                </div>
              </div>
              <button
                type='submit'
                className='w-full text-white bg-sky-500 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800'
                disabled={loading}
              >
                {loading ? 'Loading...' : 'Buat akun'}
              </button>
              <p className='text-sm font-normal text-gray-500 dark:text-gray-400'>
                Sudah punya akun?{' '}
                <Link
                  to='/login'
                  className='font-medium text-primary-600 hover:underline dark:text-primary-500'
                >
                  Masuk
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
