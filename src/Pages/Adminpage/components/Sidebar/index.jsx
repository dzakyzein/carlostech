/* eslint-disable react/prop-types */
import React, { useEffect, useRef } from 'react';
import { NavLink, useLocation, useNavigate } from 'react-router-dom';
import SidebarLinkGroup from './SidebarLinkGroup';
import CarlosTech from '../../../../assets/carlos-tech.png';

//icons
import { RxDashboard } from 'react-icons/rx';
import { BsTable } from 'react-icons/bs';
import { HiOutlineUsers } from 'react-icons/hi';
import { CiLogout } from 'react-icons/ci';
import { AiOutlineTool } from 'react-icons/ai';
import { FaRegQuestionCircle } from 'react-icons/fa';

const Sidebar = ({ sidebarOpen, setSidebarOpen }) => {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();

  const trigger = useRef(null);
  const sidebar = useRef(null);

  // close on click outside
  useEffect(() => {
    const clickHandler = ({ target }) => {
      if (!sidebar.current || !trigger.current) return;
      if (
        !sidebarOpen ||
        sidebar.current.contains(target) ||
        trigger.current.contains(target)
      )
        return;
      setSidebarOpen(false);
    };
    document.addEventListener('click', clickHandler);
    return () => document.removeEventListener('click', clickHandler);
  });

  // close if the esc key is pressed
  useEffect(() => {
    const keyHandler = ({ keyCode }) => {
      if (!sidebarOpen || keyCode !== 27) return;
      setSidebarOpen(false);
    };
    document.addEventListener('keydown', keyHandler);
    return () => document.removeEventListener('keydown', keyHandler);
  });

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <aside
      ref={sidebar}
      className={`shadow-6 absolute left-0 top-0 z-9999 flex h-screen w-72.5 flex-col overflow-y-hidden bg-black duration-300 ease-linear dark:bg-boxdark lg:static lg:translate-x-0 ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full'
      }`}
    >
      {/* <!-- SIDEBAR HEADER --> */}
      <div className='flex items-center justify-between gap-2 px-6 py-5.5 lg:py-6.5 w-3/4'>
        <NavLink to='/admin'>
          <img src={CarlosTech} alt='Logo' />
        </NavLink>

        <button
          ref={trigger}
          onClick={() => setSidebarOpen(!sidebarOpen)}
          aria-controls='sidebar'
          aria-expanded={sidebarOpen}
          className='block lg:hidden'
        >
          <svg
            className='fill-current'
            width='20'
            height='18'
            viewBox='0 0 20 18'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              d='M19 8.175H2.98748L9.36248 1.6875C9.69998 1.35 9.69998 0.825 9.36248 0.4875C9.02498 0.15 8.49998 0.15 8.16248 0.4875L0.399976 8.3625C0.0624756 8.7 0.0624756 9.225 0.399976 9.5625L8.16248 17.4375C8.31248 17.5875 8.53748 17.7 8.76248 17.7C8.98748 17.7 9.17498 17.625 9.36248 17.475C9.69998 17.1375 9.69998 16.6125 9.36248 16.275L3.02498 9.8625H19C19.45 9.8625 19.825 9.4875 19.825 9.0375C19.825 8.55 19.45 8.175 19 8.175Z'
              fill=''
            />
          </svg>
        </button>
      </div>
      {/* <!-- SIDEBAR HEADER --> */}

      <div className='no-scrollbar flex flex-col overflow-y-auto duration-300 ease-linear'>
        {/* <!-- Sidebar Menu --> */}
        <nav className='mt-5 py-4 px-4 lg:mt-9 lg:px-6'>
          {/* <!-- Menu Group --> */}
          <div>
            <h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark2'>
              MENU
            </h3>

            <ul className='mb-6 flex flex-col gap-1.5'>
              {/* <!-- Menu Item Dashboard --> */}
              <SidebarLinkGroup
                activeCondition={
                  pathname === '/' || pathname.includes('dashboard')
                }
              >
                {() => {
                  return (
                    <React.Fragment>
                      <NavLink
                        to='/admin'
                        className={`group relative flex items-center gap-2.5 rounded-sm px-4 py-2 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                          (pathname === '/admin' ||
                            pathname.includes('dashboard')) &&
                          'bg-graydark dark:bg-meta-4'
                        }`}
                      >
                        <RxDashboard />
                        Dashboard
                      </NavLink>
                    </React.Fragment>
                  );
                }}
              </SidebarLinkGroup>
              {/* <!-- Menu Item Dashboard --> */}

              {/* Menu Item Tool */}
              <li>
                <NavLink
                  to='/admin/tool'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('tool') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <AiOutlineTool />
                  Peralatan
                </NavLink>
              </li>
              {/* Menu Item Tool */}

              {/* <!-- Menu Item User --> */}
              <li>
                <NavLink
                  to='/admin/user'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('user') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <HiOutlineUsers />
                  Pengguna
                </NavLink>
              </li>
              {/* <!-- Menu Item User --> */}

              {/* <!-- Menu Item Sale --> */}
              <li>
                <NavLink
                  to='/admin/sale'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('sale') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <BsTable />
                  Penjualan
                </NavLink>
              </li>
              {/* <!-- Menu Item sale --> */}
            </ul>
          </div>

          {/* <!-- Others Group --> */}
          <div>
            <h3 className='mb-4 ml-4 text-sm font-semibold text-bodydark2'>
              OTHERS
            </h3>

            <ul className='mb-6 flex flex-col gap-1.5'>
              {/* <!-- Menu Item Logout --> */}
              <li>
                <NavLink
                  to='/'
                  onClick={handleLogout}
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-bodydark1 duration-300 ease-in-out hover:bg-graydark dark:hover:bg-meta-4 ${
                    pathname.includes('logout') && 'bg-graydark dark:bg-meta-4'
                  }`}
                >
                  <CiLogout />
                  Keluar
                </NavLink>
              </li>
              {/* <!-- Menu Item Logout --> */}

              <li>
                <NavLink
                  to='https://drive.google.com/file/d/1hzudUeano3VNmYu5hvIi88XiGKSBZ1Jf/view?usp=sharing'
                  target='_blank'
                  className={`group relative flex items-center gap-2.5 rounded-sm py-2 px-4 font-medium text-zinc-500 duration-300 ease-in-out hover:text-zinc-400  mt-30`}
                >
                  <FaRegQuestionCircle />
                  Panduan
                </NavLink>
              </li>
            </ul>
          </div>
        </nav>
        {/* <!-- Sidebar Menu --> */}
      </div>
    </aside>
  );
};

export default Sidebar;
