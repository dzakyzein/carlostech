/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const SaleData = () => {
  const [admin, setAdmin] = useState({});
  const [saleData, setSaleData] = useState([]);

  useEffect(() => {
    const adminData = JSON.parse(localStorage.getItem('admin'));
    const token = localStorage.getItem('token');

    if (adminData) {
      setAdmin(adminData);
    }

    const fetchReservations = async () => {
      try {
        const response = await axios.get(
          'http://localhost:3000/api/v1/reservations',
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );
        setSaleData(response.data.data);
      } catch (error) {
        console.error('Error fetching reservations:', error);
      }
    };

    fetchReservations();
  }, []);

  const handleStatusChange = async (saleId, currentStatus) => {
    try {
      if (!saleId) {
        console.error('Sale ID is undefined or null');
      }
      const newStatus = currentStatus === 'lunas' ? 'belum lunas' : 'lunas';

      await axios.put(
        `http://localhost:3000/api/v1/reservations/${saleId}`,
        { status: newStatus },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      // Update UI by updating saleData state
      const updatedSales = saleData.map((sale) =>
        sale._id === saleId ? { ...sale, status: newStatus } : sale
      );
      setSaleData(updatedSales);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='py-6 px-4 md:px-6 xl:px-7.5'>
        <h4 className='text-xl font-semibold text-black dark:text-white'>
          Data Penjualan
        </h4>
      </div>

      <div className='grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5'>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Nama</p>
        </div>
        <div className='col-span-2 hidden items-center sm:flex'>
          <p className='font-medium'>No. Telepon</p>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Alamat</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Jenis Mesin</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Jumlah</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Catatan</p>
        </div>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Status</p>
        </div>
      </div>

      {saleData.map((sale, key) => (
        <div
          className='grid grid-cols-8 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-10 md:px-6 2xl:px-7.5'
          key={key}
        >
          <div className='col-span-2 flex items-center'>
            <div className='flex flex-col gap-4 sm:flex-row sm:items-center'>
              <p className='text-sm text-black dark:text-white'>{sale.name}</p>
            </div>
          </div>
          <div className='col-span-2 hidden items-center sm:flex'>
            <p className='text-sm text-black dark:text-white'>{sale.phone}</p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{sale.address}</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{sale.type}</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{sale.amount}</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{sale.note}</p>
          </div>
          <div
            className='col-span-1 flex items-center cursor-pointer'
            onClick={() => handleStatusChange(sale._id, sale.status)}
          >
            <p
              className={`text-sm ${
                sale.status === 'lunas' ? 'text-green-500' : 'text-red-500'
              } dark:text-white`}
            >
              {sale.status}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SaleData;
