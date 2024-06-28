/* eslint-disable no-unused-vars */
import { useEffect, useState } from 'react';
import axios from 'axios';

const User = () => {
  const [userData, setUserData] = useState([]);

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

  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='py-6 px-4 md:px-6 xl:px-7.5'>
        <h4 className='text-xl font-semibold text-black dark:text-white'>
          Data User
        </h4>
      </div>

      <div className='grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'>
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

      {filteredUserData.map((user, key) => (
        <div
          className='grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'
          key={key}
        >
          <div className='col-span-2 flex items-center'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center'>
              <p className='text-sm text-black dark:text-white'>{user.id}</p>
            </div>
          </div>
          <div className='col-span-2 flex items-center'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center'>
              <p className='text-sm text-black dark:text-white'>{user.name}</p>
            </div>
          </div>
          <div className='col-span-2 hidden items-center md:flex'>
            <p className='text-sm text-black dark:text-white'>{user.email}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
