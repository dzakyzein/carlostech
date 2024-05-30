import flatpickr from 'flatpickr';
import { useEffect } from 'react';

//icons
import { GrFormPrevious, GrFormNext } from 'react-icons/gr';
import { FaRegCalendarCheck } from 'react-icons/fa6';

const DatePickerTwo = () => {
  useEffect(() => {
    // Init flatpickr
    flatpickr('.form-datepicker', {
      mode: 'single',
      static: true,
      monthSelectorType: 'static',
      dateFormat: 'M j, Y',
      prevArrow: <GrFormPrevious />,
      nextArrow: <GrFormNext />,
    });
  }, []);

  return (
    <div>
      <label className='mb-3 block text-sm font-medium text-black dark:text-white'>
        Select date
      </label>
      <div className='relative'>
        <input
          className='form-datepicker w-full rounded border-[1.5px] border-stroke bg-transparent px-5 py-3 font-normal outline-none transition focus:border-primary active:border-primary dark:border-form-strokedark dark:bg-form-input dark:focus:border-primary'
          placeholder='mm/dd/yyyy'
          data-class='flatpickr-right'
        />

        <div className='pointer-events-none absolute inset-0 left-auto right-5 flex items-center'>
          <FaRegCalendarCheck />
        </div>
      </div>
    </div>
  );
};

export default DatePickerTwo;
