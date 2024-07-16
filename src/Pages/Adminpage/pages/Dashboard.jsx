/* eslint-disable no-unused-vars */
import React, { useEffect, useState } from 'react';
import axios from 'axios';

import CardDataStats from '../components/CardDataStats';
import ChartOne from '../components/Charts/ChartOne';
import ChartTwo from '../components/Charts/ChartTwo';
import DefaultLayout from '../layout/DefaultLayout';

//icons
import { FaEye } from 'react-icons/fa';
import { MdOutlineShoppingCart } from 'react-icons/md';
import { IoBagHandleOutline } from 'react-icons/io5';
import { HiOutlineUsers } from 'react-icons/hi';

const Dashboard = () => {
  const [totalUsers, setTotalUsers] = useState(0);

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/users/total-users')
      .then((response) => {
        setTotalUsers(response.data.totalUsers);
      })
      .catch((error) => {
        console.error('Error fetching total users:', error);
      });
  }, []);

  return (
    <DefaultLayout>
      <div className='grid grid-cols-1 gap-4 md:grid-cols-2 md:gap-6 xl:grid-cols-4 2xl:gap-7.5'>
        <CardDataStats
          title='Total Pengunjung'
          total='$3.456K'
          rate='0.43%'
          levelUp
        >
          <FaEye className='text-blue-600 text-xl' />
        </CardDataStats>
        <CardDataStats title='Total Omset' total='$45,2K' rate='4.35%' levelUp>
          <MdOutlineShoppingCart className='text-blue-600 text-xl' />
        </CardDataStats>
        <CardDataStats
          title='Total Penjualan'
          total='2.450'
          rate='2.59%'
          levelUp
        >
          <IoBagHandleOutline className='text-blue-600 text-xl' />
        </CardDataStats>
        <CardDataStats
          title='Total Pengguna'
          total={totalUsers}
          rate='0.95%'
          levelUp
        >
          <HiOutlineUsers className='text-blue-600 text-xl' />
        </CardDataStats>
      </div>

      <div className='mt-4 grid grid-cols-12 gap-4 md:mt-6 md:gap-6 2xl:mt-7.5 2xl:gap-7.5'>
        <ChartOne />
        <ChartTwo />
      </div>
    </DefaultLayout>
  );
};

export default Dashboard;
