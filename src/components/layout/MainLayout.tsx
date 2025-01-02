import React, { Children } from 'react';
import { UploadOutlined, UserOutlined, VideoCameraOutlined } from '@ant-design/icons';
import { Layout, Menu, theme } from 'antd';
import { MenuItemType } from 'antd/es/menu/interface';

const { Header, Content, Footer, Sider } = Layout;

const items :MenuItemType[] = [
    {
        key:'jahid1',
        label:'Dashboard',
    },
    {
        key:'jahid2',
        label:'Profile',
    },
    {
        key:'jahid3',
        label:'User Mangement',
    },
]
// const items = [UserOutlined, VideoCameraOutlined, UploadOutlined, UserOutlined].map(
//   (icon, index) => ({
//     key: String(index + 1),
//     icon: React.createElement(icon),
//     label: `nav ${index + 1}`,
//     Children:[
//         {
//             key:'kdjfa',
//             label: 'jahid'

//         }
//     ]
//   }),
// );

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
      <Menu theme="dark" mode="inline" defaultSelectedKeys={['4']} items={items} />
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
         the versity content Here
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