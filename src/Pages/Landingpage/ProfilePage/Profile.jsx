/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import { IoPersonOutline } from 'react-icons/io5';

const LPProfile = () => {
  const [user, setUser] = useState({});
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem('user'));
    const token = localStorage.getItem('token');

    if (userData) {
      setUser(userData);
    }

    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/reservations',
          {
            params: { userId: userData.id },
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setReservations(response.data.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    if (userData && userData.id) {
      fetchReservations();
    }
  }, []);

  const formatCurrency = (amount) => {
    return `Rp ${new Intl.NumberFormat('id-ID').format(amount)}`;
  };

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
                <span className='ml-2 text-gray-700'>
                  {user.name || 'John Doe'}
                </span>
              </li>
              <li className='flex items-center'>
                <span className='font-medium mr-2'>Email</span>
                <span className='text-gray-700'>:</span>
                <span className='ml-2 text-gray-700'>
                  {user.email || 'john.doe@example.com'}
                </span>
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
            <thead className='border'>
              <tr>
                <th className='px-4 py-2 border-r'>Nama</th>
                <th className='px-4 py-2 border-r'>Telepon</th>
                <th className='px-4 py-2 border-r'>Alamat</th>
                <th className='px-4 py-2 border-r'>Jenis Mesin</th>
                <th className='px-4 py-2 border-r'>Jumlah</th>
                <th className='px-4 py-2 border-r'>Catatan</th>
                <th className='px-4 py-2 border-r'>Status</th>
                <th className='px-4 py-2 border-r'>Harga</th>
                <th className='px-4 py-2'>Progress</th>
              </tr>
            </thead>

            <tbody>
              {reservations.length > 0 ? (
                reservations.map((reservation, index) => (
                  <tr key={index}>
                    <td className='border px-4 py-2'>{reservation.name}</td>
                    <td className='border px-4 py-2'>{reservation.phone}</td>
                    <td className='border px-4 py-2'>{reservation.address}</td>
                    <td className='border px-4 py-2'>{reservation.type}</td>
                    <td className='border px-4 py-2'>{reservation.amount}</td>
                    <td className='border px-4 py-2'>
                      {reservation.note || '-'}
                    </td>
                    <td className='border px-4 py-2'>{reservation.status}</td>
                    <td className='border px-4 py-2'>
                      {formatCurrency(reservation.price)}
                    </td>
                    <td className='border px-4 py-2'>{reservation.progress}</td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className='border px-4 py-2 text-center' colSpan='9'>
                    No reservations found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default LPProfile;
