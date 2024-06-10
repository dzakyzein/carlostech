import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableTwo from '../components/Tables/TableTwo';
import TableOne from '../components/Tables/TableOne';
import DefaultLayout from '../layout/DefaultLayout';

const Product = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Product' />

      <div className='flex flex-col gap-10'>
        <TableOne />
        <TableTwo />
      </div>
    </DefaultLayout>
  );
};

export default Product;
