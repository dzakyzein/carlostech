import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableOne from '../components/Tables/TableOne';
import DefaultLayout from '../layout/DefaultLayout';

const Product = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Penjualan' />

      <div className='flex flex-col gap-10'>
        <TableOne />
      </div>
    </DefaultLayout>
  );
};

export default Product;
