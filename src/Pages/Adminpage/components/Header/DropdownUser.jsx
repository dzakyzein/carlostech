import { useEffect, useRef, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';

import UserOne from '../../images/user/user-01.png';

//icons
import { IoSettingsOutline } from 'react-icons/io5';
import { TbLogout2 } from 'react-icons/tb';

const DropdownUser = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [userName, setUserName] = useState('');

  const trigger = useRef(null);
  const dropdown = useRef(null);
  const navigate = useNavigate();

  useEffect(() => {
    // Ambil nama pengguna dari localStorage
    const storedUser = localStorage.getItem('user');
    if (storedUser) {
      const user = JSON.parse(storedUser);
      setUserName(user.name);
    }
  }, []);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!dropdown.current) return;
      if (
        !dropdownOpen ||
        dropdown.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setDropdownOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!dropdownOpen || keyCode !== 27) return;
      setDropdownOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <div className='relative'>
      <Link
        ref={trigger}
        onClick={() => setDropdownOpen(!dropdownOpen)}
        className='flex items-center gap-4'
        to='#'
      >
        <span className='hidden text-right lg:block'>
          <span className='block text-sm font-medium text-black dark:text-white'>
            {userName}
          </span>
        </span>

        <span className='h-12 w-12 rounded-full'>
          <img src={UserOne} alt='User' />
        </span>
      </Link>

      {/* <!-- Dropdown Start --> */}
      <div
        ref={dropdown}
        onFocus={() => setDropdownOpen(true)}
        onBlur={() => setDropdownOpen(false)}
        className={`absolute right-0 mt-4 flex w-62.5 flex-col rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark ${
          dropdownOpen === true ? 'block' : 'hidden'
        }`}
      >
        <ul className='flex flex-col gap-5 border-b border-stroke px-6 py-7.5 dark:border-strokedark'>
          <li>
            <Link
              to='/pages/settings'
              className='flex items-center gap-3.5 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
            >
              <IoSettingsOutline />
              Account Settings
            </Link>
          </li>
        </ul>
        <NavLink
          to='/login'
          onClick={handleLogout}
          className='flex items-center gap-3.5 px-6 py-4 text-sm font-medium duration-300 ease-in-out hover:text-primary lg:text-base'
        >
          <TbLogout2 className='text-xl' />
          Log Out
        </NavLink>
      </div>
      {/* <!-- Dropdown End --> */}
    </div>
  );
};

export default DropdownUser;
