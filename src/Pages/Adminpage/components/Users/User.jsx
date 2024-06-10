/* eslint-disable no-unused-vars */
import Gear from '../../../../assets/gear.png';

const userData = [
  {
    image: Gear,
    name: 'Dzaky',
    email: 'dzaky@gmail.com',
    password: 'dzaky123',
  },
  {
    image: Gear,
    name: 'Dzaky',
    email: 'dzaky@gmail.com',
    password: 'dzaky123',
  },
  {
    image: Gear,
    name: 'Dzaky',
    email: 'dzaky@gmail.com',
    password: 'dzaky123',
  },
  {
    image: Gear,
    name: 'Dzaky',
    email: 'dzaky@gmail.com',
    password: 'dzaky123',
  },
];

const User = () => {
  return (
    <div className='rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
      <div className='py-6 px-4 md:px-6 xl:px-7.5'>
        <h4 className='text-xl font-semibold text-black dark:text-white'>
          Data Pengguna
        </h4>
      </div>

      <div className='grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Nama</p>
        </div>
        <div className='col-span-2 hidden items-center md:flex'>
          <p className='font-medium'>Email</p>
        </div>
        <div className='col-span-2 flex items-center'>
          <p className='font-medium'>Kata Sandi</p>
        </div>
      </div>

      {userData.map((user, key) => (
        <div
          className='grid grid-cols-6 border-t border-stroke py-4.5 px-4 dark:border-strokedark md:px-6 2xl:px-7.5'
          key={key}
        >
          <div className='col-span-2 flex items-center'>
            <div className='flex flex-col gap-4 md:flex-row md:items-center'>
              <div className='w-15 rounded-md'>
                <img src={user.image} alt='user' />
              </div>
              <p className='text-sm text-black dark:text-white'>{user.name}</p>
            </div>
          </div>
          <div className='col-span-2 hidden items-center md:flex'>
            <p className='text-sm text-black dark:text-white'>{user.email}</p>
          </div>
          <div className='col-span-2 flex items-center'>
            <p className='text-sm text-black dark:text-white'>
              {user.password}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default User;
