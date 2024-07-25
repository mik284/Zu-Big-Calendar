import { history, Outlet } from '@umijs/max';
import { ConfigProvider } from 'antd';
import Navbar from '../Navbar';
import Footer from '../Footer';
import { useEffect } from 'react';

function Layout() {
  useEffect(() => {
    history.listen(() => {
      window.scrollTo(0, 0);
    });
  }, []);
  return (
    <div>
      <ConfigProvider
        theme={{
          cssVar: true,
          token: {
            fontFamily: 'poppins-system, sans-serif',
          },
        }}
      >
        <div className="grid content-between mx-auto h-screen min-h-screen px-4 w-full 2xl:max-w-[1440px] scroll-smooth">
          <div className="grid grid-cols-1">
            <Navbar/>
            <Outlet />
          </div>
          <Footer/>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default Layout;
