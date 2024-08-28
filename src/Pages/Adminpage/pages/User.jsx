import Breadcrumb from '../components/Breadcrumbs/Breadcrumb';
import UserData from '../components/Users/User';
import DefaultLayout from '../layout/DefaultLayout';

const User = () => {
  return (
    <DefaultLayout>
      <Breadcrumb pageName='Pengguna' />

      <div className='flex flex-col gap-10'>
        <UserData />
      </div>
    </DefaultLayout>
  );
};

export default User;
