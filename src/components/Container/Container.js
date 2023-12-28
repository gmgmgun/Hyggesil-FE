import { Outlet } from 'react-router-dom';
import TopNav from '../TopNav/TopNav';
import Footer from '../Footer/Footer';
const Container = () => {
  return (
    <>
      <TopNav />
      <Outlet />
      <Footer />
    </>
  );
};
export default Container;
