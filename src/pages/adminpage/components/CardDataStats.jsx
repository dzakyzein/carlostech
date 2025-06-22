/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
import React, { ReactNode } from 'react';
import { IoMdArrowDown, IoMdArrowUp } from 'react-icons/io';

const CardDataStatsProps = ({
  title,
  total,
  rate,
  levelUp,
  levelDown,
  children,
}) => (
  <div className='rounded-sm border border-stroke bg-white py-6 px-7.5 shadow-default dark:border-strokedark dark:bg-boxdark'>
    <div className='flex h-11.5 w-11.5 items-center justify-center rounded-full bg-meta-2 dark:bg-meta-4'>
      {children}
    </div>

    <div className='mt-4 flex items-end justify-between'>
      <div>
        <h4 className='text-title-md font-bold text-black dark:text-white'>
          {total}
        </h4>
        <span className='text-sm font-medium'>{title}</span>
      </div>

      <span
        className={`flex items-center gap-1 text-sm font-medium ${
          levelUp ? 'text-meta-3' : ''
        } ${levelDown ? 'text-meta-1' : ''}`}
      >
        {rate}

        {levelUp && <IoMdArrowUp className='fill-meta-3' />}
        {levelDown && <IoMdArrowDown className='fill-meta-1' />}
      </span>
    </div>
  </div>
);

export default CardDataStatsProps;
