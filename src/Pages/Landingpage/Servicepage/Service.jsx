/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import LandingLayout from '../Layout/LandingLayout';
import CarlosTech from '../../../assets/carlos-tech.png';
import axios from 'axios';
import Swal from 'sweetalert2';

const Service = () => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    address: '',
    type: '',
    amount: 1,
    note: '',
    status: 'Belum Lunas',
    price: '',
    progress: '',
  });

  useEffect(() => {
    const loggedInUser = localStorage.getItem('user');

    if (loggedInUser) {
      const user = JSON.parse(loggedInUser);
      setFormData((prevData) => ({
        ...prevData,
        name: user.name,
      }));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === 'phone') {
      const isValidPhoneNumber = /^[0-9+]*$/.test(value);
      if (!isValidPhoneNumber) return;
    }

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const token = localStorage.getItem('token');

    try {
      const response = await axios.post(
        'http://localhost:3000/api/v1/reservations',
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      Swal.fire({
        title: 'Pemesanan',
        text: 'Pesanan berhasil dipesan',
        icon: 'success',
      });
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Pesanan gagal',
      });
    }
  };

  return (
    <LandingLayout>
      <div className='min-h-screen flex flex-col justify-between bg-center bg-cover bg-no-repeat'>
        <div className='flex flex-col items-center justify-center md:space-x-4'>
          <div className='w-full max-w-md'>
            <a className='flex justify-center my-4' href='/'>
              <img src={CarlosTech} className='w-1/2' />
            </a>
          </div>
          <div className='w-full max-w-md bg-white text-black md:p-6 rounded-lg shadow-md overflow-y-auto'>
            <h2 className='text-2xl font-bold mb-4 text-center '>
              Formulir Pemesanan
            </h2>
            <form onSubmit={handleSubmit}>
              <div className='flex gap-4'>
                <div className='mb-2'>
                  <label className='block text-sm font-medium ' htmlFor='name'>
                    Nama
                  </label>
                  <input
                    type='text'
                    id='name'
                    name='name'
                    value={formData.name}
                    onChange={handleChange}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white'
                    readOnly
                  />
                </div>
                <div className='mb-2'>
                  <label className='block text-sm font-medium ' htmlFor='phone'>
                    Telepon
                  </label>
                  <input
                    type='tel'
                    id='phone'
                    name='phone'
                    value={formData.phone}
                    onChange={handleChange}
                    className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white'
                    pattern='[0-9+]*'
                    required
                  />
                </div>
              </div>
              <div className='mb-2'>
                <label className='block text-sm font-medium ' htmlFor='address'>
                  Alamat
                </label>
                <textarea
                  id='address'
                  name='address'
                  value={formData.address}
                  onChange={handleChange}
                  className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white'
                  required
                ></textarea>
              </div>
              <div className='mb-2'>
                <label className='block text-sm font-medium ' htmlFor='type'>
                  Jenis Mesin
                </label>
                <select
                  id='type'
                  name='type'
                  value={formData.type}
                  onChange={handleChange}
                  className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white font-normal'
                  required
                >
                  <option value=''>Pilih jenis mesin</option>
                  <option value='Alat Berat'>Alat Berat</option>
                  <option value='Gigi Rasio Motor'>Gigi Rasio Motor</option>
                  <option value='Gigi Rasio Mobil'>Gigi Rasio Mobil</option>
                  <option value='Sparepart Pabrik'>Sparepart Pabrik</option>
                </select>
              </div>
              <div className='mb-2'>
                <label className='block text-sm font-medium ' htmlFor='amount'>
                  Jumlah
                </label>
                <input
                  type='number'
                  id='amount'
                  name='amount'
                  value={formData.amount}
                  onChange={handleChange}
                  className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white'
                  min='1'
                  required
                />
              </div>
              <div className='mb-2'>
                <label className='block text-sm font-medium ' htmlFor='note'>
                  Catatan
                </label>
                <textarea
                  id='note'
                  name='note'
                  value={formData.note}
                  onChange={handleChange}
                  className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm bg-white'
                ></textarea>
              </div>
              <button
                type='submit'
                className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none'
              >
                Pesan Sekarang
              </button>
            </form>
          </div>
        </div>
      </div>
    </LandingLayout>
  );
};

export default Service;
