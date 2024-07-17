import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import SaleData from '../components/Sales/SaleData';
import DefaultLayout from '../layout/DefaultLayout';

const Sale = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Penjualan' />

      <div className='flex flex-col gap-10'>
        <SaleData />
      </div>
    </DefaultLayout>
  );
};

export default Sale;
