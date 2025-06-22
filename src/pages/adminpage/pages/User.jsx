import Breadcrumb from "../components/breadcrumbs/Breadcrumb";
import UserData from "../components/users/User";
import DefaultLayout from "../layout/DefaultLayout";

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
