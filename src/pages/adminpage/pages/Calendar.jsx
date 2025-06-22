/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import DefaultLayout from '../layout/DefaultLayout';

const Calendar = () => {
  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  const getDaysInMonth = (month, year) => {
    return new Date(year, month + 1, 0).getDate();
  };

  const generateMonth = (monthIndex, year) => {
    const daysInMonth = getDaysInMonth(monthIndex, year);
    const firstDayIndex = new Date(year, monthIndex, 1).getDay();
    const rows = [];
    let cells = [];

    // Menentukan bulan sebelumnya
    const previousMonthIndex = monthIndex === 0 ? 11 : monthIndex - 1;
    const previousMonthDays = getDaysInMonth(previousMonthIndex, year);
    const startingDay = previousMonthDays - firstDayIndex + 1;

    // Membuat sel kosong untuk tanggal dari bulan sebelumnya
    for (let i = 0; i < firstDayIndex; i++) {
      cells.push(
        <td
          key={`empty-start-${i}`}
          className='ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31'
        >
          <span className='font-medium text-gray-500 dark:text-gray-400'>
            {startingDay + i}
          </span>
        </td>
      );
    }

    // Membuat sel untuk setiap hari dalam bulan
    for (let day = 1; day <= daysInMonth; day++) {
      cells.push(
        <td
          key={`day-${day}`}
          className='ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31'
          onClick={() => handleAddEvent(day, monthIndex, year)}
        >
          <span className='font-medium text-black dark:text-white'>{day}</span>
        </td>
      );
      // Jika sudah terisi satu baris, masukkan ke dalam rows dan reset cells
      if ((firstDayIndex + day) % 7 === 0) {
        rows.push(
          <tr key={`row-${rows.length}`} className='grid grid-cols-7'>
            {cells}
          </tr>
        );
        cells = [];
      }
    }

    // Menentukan bulan berikutnya
    let nextMonthDay = 1;

    // Masukkan sel kosong untuk tanggal dari bulan berikutnya
    while (cells.length < 7) {
      cells.push(
        <td
          key={`empty-end-${cells.length}`}
          className='ease relative h-20 cursor-pointer border border-stroke p-2 transition duration-500 hover:bg-gray dark:border-strokedark dark:hover:bg-meta-4 md:h-25 md:p-6 xl:h-31'
        >
          <span className='font-medium text-gray-500 dark:text-gray-400'>
            {nextMonthDay++}
          </span>
        </td>
      );
    }

    // Masukkan sisa sel ke dalam baris terakhir
    if (cells.length > 0) {
      rows.push(
        <tr key={`row-${rows.length}`} className='grid grid-cols-7'>
          {cells}
        </tr>
      );
    }

    return rows;
  };

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  const goToPreviousMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 0 ? 11 : prevMonth - 1));
    setCurrentYear((prevYear) =>
      currentMonth === 0 ? prevYear - 1 : prevYear
    );
  };

  const goToNextMonth = () => {
    setCurrentMonth((prevMonth) => (prevMonth === 11 ? 0 : prevMonth + 1));
    setCurrentYear((prevYear) =>
      currentMonth === 11 ? prevYear + 1 : prevYear
    );
  };

  const handleAddEvent = (day, monthIndex, year) => {
    const eventName = prompt('Enter event name:');
    if (eventName) {
      alert(
        `Event "${eventName}" added successfully on ${day} ${months[monthIndex]} ${year}`
      );
    }
  };

  return (
    <DefaultLayout>
      <Breadcrumb pageName='Calendar' />

      {/* Navigation Buttons */}
      <div className='flex justify-center space-x-4 mb-4'>
        <button
          onClick={goToPreviousMonth}
          className='text-gray-500 hover:text-gray-700 focus:outline-none'
        >
          &lt;
        </button>
        <span className='text-lg font-semibold text-black dark:text-white'>
          {months[currentMonth]} {currentYear}
        </span>
        <button
          onClick={goToNextMonth}
          className='text-gray-500 hover:text-gray-700 focus:outline-none'
        >
          &gt;
        </button>
      </div>

      {/* Calendar */}
      <div className='w-full max-w-full rounded-sm border border-stroke bg-white shadow-default dark:border-strokedark dark:bg-boxdark'>
        <table className='w-full'>
          <thead>
            <tr className='grid grid-cols-7 rounded-t-sm bg-primary text-white'>
              <th className='flex h-15 items-center justify-center rounded-tl-sm p-1 text-xs font-semibold sm:text-base xl:p-5'>
                <span className='hidden lg:block'> Sunday </span>
                <span className='block lg:hidden'> Sun </span>
              </th>
              <th className='flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5'>
                <span className='hidden lg:block'> Monday </span>
                <span className='block lg:hidden'> Mon </span>
              </th>
              <th className='flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5'>
                <span className='hidden lg:block'> Tuesday </span>
                <span className='block lg:hidden'> Tue </span>
              </th>
              <th className='flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5'>
                <span className='hidden lg:block'> Wednesday </span>
                <span className='block lg:hidden'> Wed </span>
              </th>
              <th className='flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5'>
                <span className='hidden lg:block'> Thursday </span>
                <span className='block lg:hidden'> Thur </span>
              </th>
              <th className='flex h-15 items-center justify-center p-1 text-xs font-semibold sm:text-base xl:p-5'>
                <span className='hidden lg:block'> Friday </span>
                <span className='block lg:hidden'> Fri </span>
              </th>
              <th className='flex h-15 items-center justify-center rounded-tr-sm p-1 text-xs font-semibold sm:text-base xl:p-5'>
                <span className='hidden lg:block'> Saturday </span>
                <span className='block lg:hidden'> Sat </span>
              </th>
            </tr>
          </thead>
          <tbody>{generateMonth(currentMonth, currentYear)}</tbody>
        </table>
      </div>
    </DefaultLayout>
  );
};

export default Calendar;
