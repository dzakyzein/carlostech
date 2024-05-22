import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';

// LandingPage
import Home from './Pages/Landingpage/Home';
import Login from './Pages/Loginpage/Login';
import Register from './Pages/Signuppage/Signup';
import About from './Pages/Landingpage/About';

// AdminPage
import Loader from './Pages/Adminpage/common/Loader/Loader';
import PageTitle from './Pages/Adminpage/components/PageTitle';
import SignIn from './Pages/Adminpage/pages/Authentication/SignIn';
import SignUp from './Pages/Adminpage/pages/Authentication/SignUp';
import Calendar from './Pages/Adminpage/pages/Calendar';
import Chart from './Pages/Adminpage/pages/Chart';
import ECommerce from './Pages/Adminpage/pages/Dashboard/ECommerce';
import FormElements from './Pages/Adminpage/pages/Form/FormElements';
import FormLayout from './Pages/Adminpage/pages/Form/FormLayout';
import Profile from './Pages/Adminpage/pages/Profile';
import Settings from './Pages/Adminpage/pages/Settings';
import Tables from './Pages/Adminpage/pages/Tables';
import Alerts from './Pages/Adminpage/pages/UiElements/Alerts';
import Buttons from './Pages/Adminpage/pages/UiElements/Buttons';

const App = () => {
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  // Loader effect on route change
  useEffect(() => {
    setLoading(true);
    const timeoutId = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timeoutId); // Cleanup on unmount or pathname change
  }, [pathname]);

  return loading ? (
    <Loader />
  ) : (
    <Routes>
      {/* Landing Pages */}
      <Route path='/' element={<Home />} />
      <Route path='/login' element={<Login />} />
      <Route path='/register' element={<Register />} />
      <Route path='/about' element={<About />} />

      {/* Admin Pages */}
      <Route
        path='/admin'
        element={
          <>
            <PageTitle title='eCommerce Dashboard | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <ECommerce />
          </>
        }
      />
      <Route
        path='/admin/calendar'
        element={
          <>
            <PageTitle title='Calendar | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <Calendar />
          </>
        }
      />
      <Route
        path='/admin/profile'
        element={
          <>
            <PageTitle title='Profile | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <Profile />
          </>
        }
      />
      <Route
        path='/admin/forms/form-elements'
        element={
          <>
            <PageTitle title='Form Elements | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <FormElements />
          </>
        }
      />
      <Route
        path='/admin/forms/form-layout'
        element={
          <>
            <PageTitle title='Form Layout | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <FormLayout />
          </>
        }
      />
      <Route
        path='/admin/tables'
        element={
          <>
            <PageTitle title='Tables | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <Tables />
          </>
        }
      />
      <Route
        path='/admin/settings'
        element={
          <>
            <PageTitle title='Settings | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <Settings />
          </>
        }
      />
      <Route
        path='/admin/chart'
        element={
          <>
            <PageTitle title='Basic Chart | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <Chart />
          </>
        }
      />
      <Route
        path='/admin/ui/alerts'
        element={
          <>
            <PageTitle title='Alerts | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <Alerts />
          </>
        }
      />
      <Route
        path='/admin/ui/buttons'
        element={
          <>
            <PageTitle title='Buttons | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <Buttons />
          </>
        }
      />
      <Route
        path='/admin/auth/signin'
        element={
          <>
            <PageTitle title='Signin | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <SignIn />
          </>
        }
      />
      <Route
        path='/admin/auth/signup'
        element={
          <>
            <PageTitle title='Signup | TailAdmin - Tailwind CSS Admin Dashboard Template' />
            <SignUp />
          </>
        }
      />
    </Routes>
  );
};

export default App;
