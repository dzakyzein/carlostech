/* eslint-disable no-unused-vars */

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar bg-base-100'>
      <div className='navbar-start'>
        <div className='dropdown'>
          <div tabIndex={0} role='button' className='btn btn-ghost lg:hidden'>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-5 w-5'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h8m-8 6h16'
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className='menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52'
          >
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <a>Service</a>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </li>
            <li>
              <Link to='/about'>About</Link>
            </li>
          </ul>
        </div>
        <Link className='btn btn-ghost text-xl' to='/'>
          Carlos Tech
        </Link>
      </div>
      <div className='navbar-center hidden lg:flex'>
        <ul className='menu menu-horizontal px-1'>
          <li>
            <Link to='/'>Home</Link>
          </li>
          <li>
            <details>
              <summary>Service</summary>
              <ul className='p-2'>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <Link to='/about'>About</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <Link className='btn btn-ghost mr-3' to='/register'>
          Sign in
        </Link>
        <Link className='btn btn-ghost' to='/login'>
          Log in
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
