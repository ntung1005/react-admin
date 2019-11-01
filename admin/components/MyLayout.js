import MyHeader from "./../components/Header";
import SideBar from './../components/SideBar';
import { Layout, Menu, Icon } from "antd";

const { Header, Content, Footer, Sider } = Layout;


const MyLayout = props => (
  <div>
    <Layout>
      <SideBar />
      <Layout>
          <MyHeader/>
        <Content style={{ margin: "24px 16px 0" }}>
          <div style={{ padding: 24, background: "#fff", minHeight: 700 }}>
            {props.children}
          </div>
        </Content>
      </Layout>
    </Layout>
  </div>
);

export default MyLayout;
