import {
    DesktopOutlined,
    FileOutlined,
    PieChartOutlined,
    TeamOutlined,
    UserOutlined,
  } from '@ant-design/icons';
  import { Layout, Menu } from "antd";
  import React, { ReactNode, useState } from "react";
  import Header from "./Header";
  import Footer from "./Footer";
  import "antd/dist/antd.css";
  import type { MenuProps } from "antd";
import { useRouter } from 'next/router';
  
  const { Content, Sider } = Layout;
  
  type MenuItem = Required<MenuProps>["items"][number];
  
  interface Props {
    children?: ReactNode;
    title?: string;
  }
  
  function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
  ): MenuItem {
    return {
      key,
      icon,
      children,
      label,
    } as MenuItem;
  }
  
  const items: MenuItem[] = [
    getItem('Option 1', '1', <PieChartOutlined />),
    getItem('Option 2', '2', <DesktopOutlined />),
    getItem('User', 'sub1', <UserOutlined />, [
      getItem('Tom', '3'),
      getItem('Bill', '4'),
      getItem('Alex', '5'),
    ]),
    getItem('Team', 'sub2', <TeamOutlined />, [getItem('Team 1', '6'), getItem('Team 2', '8')]),
    getItem('Files', '9', <FileOutlined />),
  ];
  
  
  const LayoutPage= ({
    children,
    title = "This is the title",
  }: Props) => {
    const [collapsed, setCollapsed] = useState(false);
    const router = useRouter();
    if(router.pathname.includes('/login')) return <>{children}</>
  
    return (
      <div className="mainpage">
        <Layout>
        <Sider collapsible collapsed={collapsed} onCollapse={value => setCollapsed(value)}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline" items={items} />
        </Sider>
  
          <Layout>
        
            <Header />
            <Content style={{ margin: "24px 16px 0" }}>
              <div
                className="site-layout-background"
                style={{ padding: 24, minHeight: 360, background: "rgb(240,242,245)" }}
              >
                {children}
              </div>
            </Content>
            <Footer />
          </Layout>
        </Layout>
      </div>
    );
  };
  
  export default LayoutPage;
  