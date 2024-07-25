import { Outlet } from '@umijs/max';
import { ConfigProvider } from 'antd';

function Layout() {
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
            <Outlet />
          </div>
        </div>
      </ConfigProvider>
    </div>
  );
}

export default Layout;
