/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Navbar from '../../../Components/Navbar';
import Footer from '../../../Components/Footer';
import { IoPersonOutline } from 'react-icons/io5';

const LPProfile = () => {
  const [user, setUser] = useState({});
  const [reservations, setReservations] = useState([]);
  const [paymentProof, setPaymentProof] = useState(null);
  const [selectedReservation, setSelectedReservation] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (reservation) => {
    setSelectedReservation(reservation);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedReservation(null);
  };

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

  const handleUpload = async (reservationId) => {
    if (!paymentProof) return;

    const formData = new FormData();
    formData.append('proof', paymentProof);

    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/reservations/upload-proof/${reservationId}`, // Tambahkan reservationId
        formData,
        {
          headers: {
            'Content-Type': 'multipart/form-data',
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      // Tangani respons jika berhasil
      console.log('Upload successful:', response.data);
      // Update state reservations setelah berhasil mengunggah
      setReservations(
        reservations.map((reservation) =>
          reservation.id === reservationId
            ? { ...reservation, paymentProof: response.data.data.paymentProof }
            : reservation
        )
      );
    } catch (error) {
      console.error('Error uploading payment proof:', error.response.data);
    }
  };

  const handleDeleteProof = async (reservationId) => {
    try {
      const response = await axios.put(
        `http://localhost:3000/api/v1/reservations/delete-proof/${reservationId}`, // Endpoint untuk hapus bukti pembayaran
        {},
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`,
          },
        }
      );

      // Update state reservations setelah berhasil menghapus bukti pembayaran
      setReservations(
        reservations.map((reservation) =>
          reservation.id === reservationId
            ? { ...reservation, paymentProof: null }
            : reservation
        )
      );

      // Tangani respons jika berhasil
      console.log('Delete successful:', response.data);
    } catch (error) {
      console.error('Error deleting payment proof:', error.response.data);
    }
  };

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
          <h2 className='text-2xl font-bold mb-4 text-center'>
            Riwayat Pemesanan
          </h2>
          <table className='table-auto mx-auto'>
            <thead className='border'>
              <tr>
                <th className='px-4 py-2 border-r'>Nama</th>
                <th className='px-4 py-2 border-r'>Jenis Mesin</th>
                <th className='px-4 py-2 border-r'>Status</th>
                <th className='px-4 py-2 border-r'>Harga</th>
                <th className='px-4 py-2 border-r'>Progress</th>
                <th className='px-4 py-2 border-r'>Bukti Transaksi DP</th>
                <th className='px-4 py-2 border-r'>Bukti Transaksi Lunas</th>
                <th className='px-4 py-2 border-r'>Aksi</th>
              </tr>
            </thead>
            <tbody>
              {reservations.length > 0 ? (
                reservations.map((reservation, index) => (
                  <tr key={index}>
                    <td className='border px-4 py-2'>{reservation.name}</td>
                    <td className='border px-4 py-2'>{reservation.type}</td>
                    <td className='border px-4 py-2'>{reservation.status}</td>
                    <td className='border px-4 py-2'>
                      {formatCurrency(reservation.price)}
                    </td>
                    <td className='border px-4 py-2'>{reservation.progress}</td>
                    <td className='border px-4 py-2'>
                      {reservation.paymentProof ? (
                        <div>
                          <a
                            href={`http://localhost:3000/${reservation.paymentProof}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-500'
                          >
                            Lihat
                          </a>
                          <span
                            onClick={() => handleDeleteProof(reservation.id)}
                            className='ml-2 text-red-500 cursor-pointer'
                          >
                            Hapus
                          </span>
                        </div>
                      ) : (
                        <div>
                          <input
                            type='file'
                            onChange={(e) => setPaymentProof(e.target.files[0])}
                            className='border border-gray-300 rounded p-1'
                          />
                          <button
                            onClick={() => handleUpload(reservation.id)}
                            className='ml-2 bg-blue-500 text-white rounded p-1'
                          >
                            Upload
                          </button>
                        </div>
                      )}
                    </td>
                    <td className='border px-4 py-2'>
                      {reservation.paymentProof ? (
                        <div>
                          <a
                            href={`http://localhost:3000/${reservation.paymentProof}`}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='text-blue-500'
                          >
                            Lihat
                          </a>
                          <span
                            onClick={() => handleDeleteProof(reservation.id)}
                            className='ml-2 text-red-500 cursor-pointer'
                          >
                            Hapus
                          </span>
                        </div>
                      ) : (
                        <div>
                          <input
                            type='file'
                            onChange={(e) => setPaymentProof(e.target.files[0])}
                            className='border border-gray-300 rounded p-1'
                          />
                          <button
                            onClick={() => handleUpload(reservation.id)}
                            className='ml-2 bg-blue-500 text-white rounded p-1'
                          >
                            Upload
                          </button>
                        </div>
                      )}
                    </td>
                    <td className='border px-4 py-2'>
                      <button
                        onClick={() => openModal(reservation)}
                        className='text-blue-500 underline'
                      >
                        Lihat Detail
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td className='border px-4 py-2 text-center' colSpan='10'>
                    Tidak Riwayat Reservasi
                  </td>
                </tr>
              )}
            </tbody>
          </table>
          <h2 className='text-xl font-bold text-center mt-10 italic'>
            Catatan: Pesanan Akan Diproses Setelah Kami Menerima Pembayaran Uang
            Muka
          </h2>
        </div>

        {/* Modal Detail Tabel */}
        {isModalOpen && selectedReservation && (
          <div className='fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-50'>
            <div className='bg-white p-6 rounded-lg shadow-lg w-11/12 max-w-3xl'>
              <h2 className='text-2xl font-bold mb-4'>Detail Pemesanan</h2>
              <p>
                <strong>Nama:</strong> {selectedReservation.name}
              </p>
              <p>
                <strong>Telepon:</strong> {selectedReservation.phone}
              </p>
              <p>
                <strong>Alamat:</strong> {selectedReservation.address}
              </p>
              <p>
                <strong>Jenis Mesin:</strong> {selectedReservation.type}
              </p>
              <p>
                <strong>Jumlah:</strong> {selectedReservation.amount}
              </p>
              <p>
                <strong>Catatan:</strong> {selectedReservation.note || '-'}
              </p>
              <p>
                <strong>Status:</strong> {selectedReservation.status}
              </p>
              <p>
                <strong>Harga:</strong>{' '}
                {formatCurrency(selectedReservation.price)}
              </p>
              <p>
                <strong>Progress:</strong> {selectedReservation.progress}
              </p>
              <p>
                <strong>Bukti Transaksi DP:</strong>{' '}
                {selectedReservation.paymentProof ? (
                  <a
                    href={`http://localhost:3000/${selectedReservation.paymentProof}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500'
                  >
                    Lihat
                  </a>
                ) : (
                  'Tidak ada bukti transaksi'
                )}
              </p>
              <p>
                <strong>Bukti Transaksi Lunas:</strong>{' '}
                {selectedReservation.paymentProof ? (
                  <a
                    href={`http://localhost:3000/${selectedReservation.paymentProof}`}
                    target='_blank'
                    rel='noopener noreferrer'
                    className='text-blue-500'
                  >
                    Lihat
                  </a>
                ) : (
                  'Tidak ada bukti transaksi'
                )}
              </p>
              <button
                onClick={closeModal}
                className='mt-4 bg-blue-500 text-white rounded px-4 py-2'
              >
                Tutup
              </button>
            </div>
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default LPProfile;
