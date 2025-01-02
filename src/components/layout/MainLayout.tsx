import React, { Children } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';
import { Link, Outlet } from 'react-router-dom';
import { adminSidebarItems } from '../../routes/admin.routes';

const { Header, Content, Footer, Sider } = Layout;

console.log(adminSidebarItems);

const MainLayout: React.FC = () => {

  return (
    <Layout style={{height:'100vh'}}>
    <Sider
      breakpoint="lg"
      collapsedWidth="0"
      onBreakpoint={(broken) => {
        console.log(broken);
      }}
      onCollapse={(collapsed, type) => {
        console.log(collapsed, type);
      }}
    >
      <div style={{display:'flex', color:'white', alignItems:"center", justifyContent:'center', paddingTop:'1rem' , paddingBottom:'1rem'}} >
        <h1>Antd Dashboard</h1>
      </div>
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={adminSidebarItems} />
    </Sider>
    <Layout>
      <Header style={{ padding: 0 }} />
      <Content style={{ margin: '24px 16px 0' }}>
        <div
          style={{
            padding: 24,
            minHeight: 360,
          
          }}
        >
         <Outlet/>
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  </Layout>
  );
};

export default MainLayout;