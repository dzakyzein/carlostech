/* eslint-disable no-unused-vars */
import React, { useState } from 'react';

const Service = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    machineType: '',
    quantity: 1,
    note: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Order submitted:', formData);
    alert('Pesanan telah selesai');
  };

  return (
    <div className='max-w-md mx-auto bg-black p-8 mt-10 rounded-lg shadow-md'>
      <h2 className='text-2xl font-bold mb-6 text-center text-white'>
        Formulir Pemesanan
      </h2>
      <form onSubmit={handleSubmit}>
        <div className='mb-4'>
          <label
            className='block text-sm font-medium text-white'
            htmlFor='name'
          >
            Nama
          </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formData.name}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-medium text-white'
            htmlFor='email'
          >
            Email
          </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formData.email}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-medium text-white'
            htmlFor='phone'
          >
            Telepon
          </label>
          <input
            type='tel'
            id='phone'
            name='phone'
            value={formData.phone}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-medium text-white'
            htmlFor='address'
          >
            Alamat
          </label>
          <textarea
            id='address'
            name='address'
            value={formData.address}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500'
            required
          ></textarea>
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-medium text-white'
            htmlFor='machineType'
          >
            Jenis Mesin
          </label>
          <select
            id='machineType'
            name='machineType'
            value={formData.machineType}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500'
            required
          >
            <option value=''>Pilih jenis mesin</option>
            <option value='Mesin A'>Mesin A</option>
            <option value='Mesin B'>Mesin B</option>
            <option value='Mesin C'>Mesin C</option>
          </select>
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-medium text-white'
            htmlFor='quantity'
          >
            Jumlah
          </label>
          <input
            type='number'
            id='quantity'
            name='quantity'
            value={formData.quantity}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500'
            min='1'
            required
          />
        </div>
        <div className='mb-4'>
          <label
            className='block text-sm font-medium text-white'
            htmlFor='note'
          >
            Catatan
          </label>
          <textarea
            id='note'
            name='note'
            value={formData.note}
            onChange={handleChange}
            className='mt-1 block w-full p-2 border border-gray-300 rounded-md shadow-sm focus:ring focus:ring-blue-300 focus:border-blue-500'
          ></textarea>
        </div>
        <button
          type='submit'
          className='w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-300'
        >
          Pesan Sekarang
        </button>
      </form>
    </div>
  );
};

export default Service;
