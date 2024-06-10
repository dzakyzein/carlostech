import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UserData from '../components/Users/User';
import AdminData from '../components/Users/Admin';
import DefaultLayout from '../layout/DefaultLayout';

const User = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='User' />

      <div className='flex flex-col gap-10'>
        <UserData />
        <AdminData />
      </div>
    </DefaultLayout>
  );
};

export default User;
