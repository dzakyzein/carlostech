import { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [userData, setUserData] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const usersPerPage = 6;

  useEffect(() => {
    axios
      .get('http://localhost:3000/api/v1/users')
      .then((response) => {
        setUserData(response.data.data);
      })
      .catch((error) => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const filteredUserData = userData.filter((user) => user.role !== 'admin');

  const indexOfLastUser = currentPage * usersPerPage;
  const indexOfFirstUser = indexOfLastUser - usersPerPage;
  const currentUsers = filteredUserData.slice(
    indexOfFirstUser,
    indexOfLastUser
  );

  const totalPages = Math.ceil(filteredUserData.length / usersPerPage);

  const nextPage = () => {
    if (currentPage < Math.ceil(filteredUserData.length / usersPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='py-6 px-4 md:px-6 xl:px-7.5'>
        <h4 className='text-xl font-semibold text-black dark:text-white'>
          Data User
        </h4>
      </div>

      <div className='grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'>
        <div className='col-span-1 flex items-center'>
          <p className='font-medium'>No</p>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Id</p>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Nama</p>
        </div>
        <div className='col-span-2 hidden items-center md:flex'>
          <p className='font-medium'>Email</p>
        </div>
      </div>

      {currentUsers.map((user, index) => (
        <div
          className='grid grid-cols-7 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'
          key={user.id}
        >
          <div className='col-span-1 flex items-center'>
            <p className='text-sm text-black dark:text-white'>
              {indexOfFirstUser + index + 1}
            </p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{user.id}</p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='text-sm text-black dark:text-white'>{user.name}</p>
          </div>
          <div className='col-span-2 hidden items-center md:flex'>
            <p className='text-sm text-black dark:text-white'>{user.email}</p>
          </div>
        </div>
      ))}

      {filteredUserData.length > usersPerPage && (
        <div className='flex justify-between py-4 px-4 md:px-6 2xl:px-7.5'>
          <button
            onClick={prevPage}
            disabled={currentPage === 1}
            className='px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded disabled:opacity-50'
          >
            Previous
          </button>
          <span className='px-4 py-2'>
            Page {currentPage} of {totalPages}
          </span>
          <button
            onClick={nextPage}
            disabled={
              currentPage === Math.ceil(filteredUserData.length / usersPerPage)
            }
            className='px-4 py-2 bg-gray-200 dark:bg-gray-700 text-black dark:text-white rounded disabled:opacity-50'
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default User;
