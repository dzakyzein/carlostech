import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import TableThree from '../components/Tables/TableTwo';
import TableOne from '../components/Tables/TableOne';
import DefaultLayout from '../layout/DefaultLayout';

const Product = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Product' />

      <div className='flex flex-col gap-10'>
        <TableOne />
        <TableThree />
      </div>
    </DefaultLayout>
  );
};

export default Product;
