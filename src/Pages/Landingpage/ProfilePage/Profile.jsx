/* eslint-disable no-unused-vars */
import React from 'react';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';

import { IoPersonOutline } from 'react-icons/io5';

const LPProfile = () => {
  return (
    <div className='flex flex-col'>
      <Navbar />
      <div className='min-h-screen bg-white text-black mt-16'>
        <div className='container mx-auto p-6 flex flex-col md:flex-row'>
          <div className='md:w-1/2 ml-40'>
            <h2 className='text-2xl font-bold mb-6 text-center md:text-left'>
              Profil Pengguna
            </h2>
            <ul className='space-y-4'>
              <li className='flex items-center'>
                <span className='font-medium mr-2'>Nama</span>
                <span className='text-gray-700'>:</span>
                <span className='ml-2 text-gray-700'>John Doe</span>
              </li>
              <li className='flex items-center'>
                <span className='font-medium mr-2'>Email</span>
                <span className='text-gray-700'>:</span>
                <span className='ml-2 text-gray-700'>john.doe@example.com</span>
              </li>
              <li className='flex items-center'>
                <span className='font-medium mr-2'>Password</span>
                <span className='text-gray-700'>:</span>
                <span className='ml-2 text-gray-700'>*********</span>
              </li>
            </ul>
          </div>
          <div className='md:w-1/2 flex items-center justify-center mt-6 md:mt-0'>
            <IoPersonOutline className='w-40 h-40 rounded-full border-2 border-gray-300' />
          </div>
        </div>
        <div className='container mx-auto mt-8'>
          <h2 className='text-2xl font-bold mb-4 text-center'>Pemesanan</h2>
          <table className='table-auto mx-auto'>
            <thead>
              <tr>
                <th className='px-4 py-2'>Nama</th>
                <th className='px-4 py-2'>Telepon</th>
                <th className='px-4 py-2'>Alamat</th>
                <th className='px-4 py-2'>Jenis Mesin</th>
                <th className='px-4 py-2'>Jumlah</th>
                <th className='px-4 py-2'>Catatan</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className='border px-4 py-2'>John Doe</td>
                <td className='border px-4 py-2'>123-456-7890</td>
                <td className='border px-4 py-2'>123 Street, City</td>
                <td className='border px-4 py-2'>Motor</td>
                <td className='border px-4 py-2'>2</td>
                <td className='border px-4 py-2'>-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LPProfile;
