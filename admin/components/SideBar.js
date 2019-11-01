import { Layout, Menu, Icon } from "antd";

import { Link } from "next/link";
import { withRouter } from 'next/router'
import { Router } from 'next/router';


const { Header, Content, Footer, Sider } = Layout;


const SideBar = ({ router }) => {
  const nextRouter = e => {
    router.push(e.key);
  };




  
    return (
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={broken => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div className="logo">
          <a href="/" target="_blank">
            OFéLia Admin
          </a>
        </div>
        <Menu theme="dark" mode="inline" defaultSelectedKeys={[router.pathname]} onClick={nextRouter}>
          <Menu.Item key="1">
            <Icon type="dashboard" />
            <span className="nav-text">Dashboard</span>
          </Menu.Item>
          <Menu.Item key="/viewProducts">
            <Icon type="shop" />
            <span className="nav-text">Products</span>
          </Menu.Item>
          <Menu.Item key="/creatProduct">
            <Icon type="upload" />
            <span className="nav-text">Creat Product</span>
          </Menu.Item>
          <Menu.Item key="4">
            <Icon type="user" />
            <span className="nav-text">Users</span>
          </Menu.Item>
        </Menu>
      </Sider>
    );
  }


export default withRouter(SideBar);