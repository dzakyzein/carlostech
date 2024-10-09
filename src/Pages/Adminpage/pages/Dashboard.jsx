// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CardDataStats from '../components/CardDataStats';
import DefaultLayout from '../layout/DefaultLayout';

// icons
// import { FaEye } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi';

const Dashboard = () => {
  const token = localStorage.getItem('token');
  const [totalUsers, setTotalUsers] = useState(0);
  const [totalReservations, setTotalReservations] = useState(0);
  const [totalMonthlyRevenue, setTotalMonthlyRevenue] = useState(0);

  // Mengambil bulan dan tahun sekarang
  const currentMonth = new Date().toLocaleDateString('id-ID', {
    month: '2-digit',
  });
  const currentYear = new Date().getFullYear();

  const [selectedMonth, setSelectedMonth] = useState(currentMonth); // Default bulan sekarang
  const [selectedYear, setSelectedYear] = useState(currentYear); // Default tahun sekarang

  const bulanIndonesia = {
    '01': 'Januari',
    '02': 'Februari',
    '03': 'Maret',
    '04': 'April',
    '05': 'Mei',
    '06': 'Juni',
    '07': 'Juli',
    '08': 'Agustus',
    '09': 'September',
    10: 'Oktober',
    11: 'November',
    12: 'Desember',
  };

  // Fetch total users
  useEffect(() => {
    axios
      .get('http://api.carlostech.id/api/v1/users/total-users')
      .then((response) => {
        setTotalUsers(response.data.totalUsers);
      })
      .catch((error) => {
        console.error('Error fetching total users:', error);
      });
  }, []);

  // Fetch total reservations
  useEffect(() => {
    axios
      .get('http://api.carlostech.id/api/v1/reservations/total-reservations', {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setTotalReservations(response.data.totalReservations);
      })
      .catch((error) => {
        console.error('Error fetching total reservations: ', error);
      });
  }, [token]);

  // Fetch monthly revenue based on selected month and year
  useEffect(() => {
    axios
      .get(`http://api.carlostech.id/api/v1/reservations/monthly-revenue`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
        params: {
          month: selectedMonth,
          year: selectedYear,
        },
      })
      .then((response) => {
        setTotalMonthlyRevenue(response.data.totalRevenue);
      })
      .catch((error) => {
        console.error('Error fetching total monthly revenue:', error);
      });
  }, [selectedMonth, selectedYear, token]);

  const formatRupiah = (number) => {
    return new Intl.NumberFormat('id-ID', {
      style: 'currency',
      currency: 'IDR',
      minimumFractionDigits: 0,
    }).format(number);
  };

  return (
    <DefaultLayout>
      <div className='mb-4'>
        <label htmlFor='month' className='text-black dark:text-white'>
          Pilih Bulan:{' '}
        </label>
        <select
          id='month'
          value={selectedMonth}
          onChange={(e) => setSelectedMonth(e.target.value)}
          className='bg-white border text-black dark:bg-black dark:text-white'
        >
          <option value='01'>Januari</option>
          <option value='02'>Februari</option>
          <option value='03'>Maret</option>
          <option value='04'>April</option>
          <option value='05'>Mei</option>
          <option value='06'>Juni</option>
          <option value='07'>Juli</option>
          <option value='08'>Agustus</option>
          <option value='09'>September</option>
          <option value='10'>Oktober</option>
          <option value='11'>November</option>
          <option value='12'>Desember</option>
        </select>

        <label htmlFor='year' className='ml-4 text-black dark:text-white'>
          Pilih Tahun:{' '}
        </label>
        <input
          id='year'
          type='number'
          value={selectedYear}
          onChange={(e) => setSelectedYear(e.target.value)}
          className='bg-white border text-black dark:bg-black dark:text-white'
        />
      </div>

      <div className='ml-36 w-[1200px] grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        {/* <CardDataStats
          title='Total Pengunjung'
          total='$3.456K'
          rate='0.43%'
          levelUp
        >
          <FaEye className='text-blue-600 text-xl' />
        </CardDataStats> */}
        <CardDataStats
          title={`Total Omset Bulan ${bulanIndonesia[selectedMonth]}`}
          total={formatRupiah(totalMonthlyRevenue)}
        >
          <MdOutlineShoppingCart className='text-blue-600 text-xl' />
        </CardDataStats>
        <CardDataStats title='Total Penjualan' total={totalReservations}>
          <IoBagHandleOutline className='text-blue-600 text-xl' />
        </CardDataStats>
        <CardDataStats title='Total Pengguna' total={totalUsers}>
          <HiOutlineUsers className='text-blue-600 text-xl' />
        </CardDataStats>
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
