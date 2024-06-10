/* eslint-disable no-unused-vars */
import React from 'react';
import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import ChartOne from '../components/Charts/ChartOne';
import ChartTwo from '../components/Charts/ChartTwo';
import DefaultLayout from '../layout/DefaultLayout';

const Chart = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Chart' />

      <div className='grid grid-cols-12 gap-4 md:gap-6 2xl:gap-7.5 dark:text-white'>
        <div className='col-span-12 md:col-span-6'>
          <ChartOne />
        </div>
        <div className='col-span-12 md:col-span-6'>
          <ChartTwo />
        </div>
        <div className='col-span-0 md:col-span-3'></div>
        <div className='col-span-0 md:col-span-3'></div>
      </div>
    </DefaultLayout>
  );
};

export default Chart;
