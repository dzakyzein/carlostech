/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NumericFormat } from 'react-number-format';

const SaleData = () => {
  const [admin, setAdmin] = useState({});
  const [saleData, setSaleData] = useState([]);
  const [editModalOpen, setEditModalOpen] = useState(false);
  const [selectedSale, setSelectedSale] = useState(null);

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
        return;
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
        sale.id === saleId ? { ...sale, status: newStatus } : sale
      );
      setSaleData(updatedSales);
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const openEditModal = (sale) => {
    setSelectedSale(sale);
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setSelectedSale(null);
    setEditModalOpen(false);
  };

  const handleEditSubmit = async (editedData) => {
    try {
      const token = localStorage.getItem('token');
      if (!editedData.id) {
        console.error('Sale ID is undefined or null');
        return;
      }

      await axios.put(
        `http://localhost:3000/api/v1/reservations/${editedData.id}`,
        editedData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      // Update UI by updating saleData state or refetching data
      const updatedSales = saleData.map((sale) =>
        sale.id === editedData.id ? { ...sale, ...editedData } : sale
      );
      setSaleData(updatedSales);

      closeEditModal();
    } catch (error) {
      console.error('Error updating reservation:', error);
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setSelectedSale({
      ...selectedSale,
      [name]: value,
    });
  };

  const handlePriceChange = (values) => {
    const { formattedValue, value } = values;
    setSelectedSale({
      ...selectedSale,
      price: value,
    });
  };

  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='py-6 px-4 md:px-6 xl:px-7.5'>
        <h4 className='text-xl font-semibold text-black dark:text-white'>
          Data Penjualan
        </h4>
      </div>

      {/* table header */}
      <div className='grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-11 md:px-6 2xl:px-7.5'>
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
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>Aksi</p>
        </div>
      </div>

      {/* table row */}
      {saleData.map((sale, key) => (
        <div
          className='grid grid-cols-9 border-t border-stroke py-4.5 px-4 dark:border-strokedark sm:grid-cols-11 md:px-6 2xl:px-7.5'
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
            <p className='text-sm text-black dark:text-white truncate'>
              {sale.address}
            </p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{sale.type}</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{sale.amount}</p>
          </div>
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white truncate'>
              {sale.note}
            </p>
          </div>
          <div
            className='col-span-1 flex items-center cursor-pointer'
            onClick={() => {
              handleStatusChange(sale.id, sale.status);
            }}
          >
            <p
              className={`text-sm ${
                sale.status === 'lunas'
                  ? 'text-green-500 dark:text-green-500'
                  : 'text-red-500 dark:text-red-500'
              } dark:text-white`}
            >
              {sale.status}
            </p>
          </div>
          <div
            className='col-span-1 flex items-center cursor-pointer'
            onClick={() => openEditModal(sale)}
          >
            <p className='text-sm text-blue-500 cursor-pointer'>Edit</p>
          </div>
        </div>
      ))}

      {/* Modal for editing reservation */}
      {editModalOpen && selectedSale && (
        <div className='fixed inset-0 flex items-center justify-center z-99999 text-black'>
          <div className='absolute inset-0 bg-black opacity-50'></div>
          <div className='relative bg-white rounded-lg shadow-lg p-8 w-full max-w-md'>
            {/* Edit form or component */}
            <h3 className='text-lg font-semibold mb-4'>Edit Reservation</h3>
            <form
              className='grid grid-cols-2 gap-4'
              onSubmit={(e) => {
                e.preventDefault();
                handleEditSubmit(selectedSale);
              }}
            >
              {/* Example form fields: */}
              <div className='mb-4'>
                <label
                  htmlFor='name'
                  className='block text-sm font-medium text-black'
                >
                  Nama
                </label>
                <input
                  type='text'
                  id='name'
                  name='name'
                  readOnly
                  defaultValue={selectedSale.name}
                  className='bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='phone'
                  className='block text-sm font-medium text-black'
                >
                  No. Telepon
                </label>
                <input
                  type='text'
                  id='phone'
                  name='phone'
                  readOnly
                  defaultValue={selectedSale.phone}
                  className='bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='address'
                  className='block text-sm font-medium text-black'
                >
                  Alamat
                </label>
                <textarea
                  type='text'
                  id='address'
                  name='address'
                  readOnly
                  defaultValue={selectedSale.address}
                  className='bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='type'
                  className='block text-sm font-medium text-black'
                >
                  Jenis Mesin
                </label>
                <input
                  type='text'
                  id='type'
                  name='type'
                  readOnly
                  defaultValue={selectedSale.type}
                  className='bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='amount'
                  className='block text-sm font-medium text-black'
                >
                  Jumlah
                </label>
                <input
                  type='text'
                  id='amount'
                  name='amount'
                  readOnly
                  defaultValue={selectedSale.amount}
                  className='bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='note'
                  className='block text-sm font-medium text-black'
                >
                  Catatan
                </label>
                <textarea
                  type='textarea'
                  id='note'
                  name='note'
                  onChange={handleInputChange}
                  defaultValue={selectedSale.note}
                  className='bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='price'
                  className='block text-sm font-medium text-black'
                >
                  Harga
                </label>
                <NumericFormat
                  thousandSeparator={true}
                  prefix={'Rp '}
                  id='price'
                  name='price'
                  onChange={handleInputChange}
                  defaultValue={selectedSale.price}
                  className='bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                />
              </div>
              <div className='mb-4'>
                <label
                  htmlFor='progress'
                  className='block text-sm font-medium text-black'
                >
                  Progress
                </label>
                <select
                  id='progress'
                  name='progress'
                  value={selectedSale.progress}
                  onChange={handleInputChange}
                  className='bg-white mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm'
                >
                  <option value='0%'>0%</option>
                  <option value='25%'>25%</option>
                  <option value='50%'>50%</option>
                  <option value='75%'>75%</option>
                  <option value='100%'>100%</option>
                </select>
              </div>

              {/* New section for viewing the payment proof */}
              <div className='col-span-2 mb-4'>
                <label className='block text-sm font-medium text-black'>
                  Bukti Pembayaran
                </label>
                {selectedSale.paymentProof ? (
                  <a
                    href={selectedSale.paymentProof}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500'
                  >
                    Lihat Bukti Pembayaran
                  </a>
                ) : (
                  <span className='text-black'>Belum ada bukti pembayaran</span>
                )}
              </div>
              <div className='flex justify-end col-span-2'>
                <button
                  type='submit'
                  className='bg-sky-500 hover:bg-sky-600 text-white py-2 px-4 rounded-lg'
                >
                  Save Changes
                </button>
                <button
                  type='button'
                  onClick={closeEditModal}
                  className='ml-4 bg-gray-300 hover:bg-gray-400 text-gray-800 py-2 px-4 rounded-lg'
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default SaleData;
