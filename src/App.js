import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './assets/images/logo.svg';
import "./assets/css/App.css";

// 引入组件
// import Header from "./components/Header";
// import Axios from "./components/Axios";

import routes from "./model/router";


import { Layout, Menu, Icon } from "antd";
const { Header, Content, Sider } = Layout;

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "组件",
      axiosVal: "0"
    };

    setTimeout(() => {
      // console.log(this.refs.header); // 获取整个子组件的实例
      this.setState({
        axiosVal: "1"
      });
    }, 2000);
  }

  state = {
    collapsed: false
  };

  componentWillMount() {
    // console.log(routes);
  }

  onCollapse = collapsed => {
    console.log(collapsed);
    this.setState({
      collapsed
    });
  };

  run = data => {
    console.log("父组件的run方法，子组件参数：", data);
  };

  runChild = () => {
    this.refs.header.run("父组件的数据");
  };

  render() {
    return (
      // <div className="App">
      //   {/* <Home /> */}
      //   {/* <ReactForm /> */}
      //   {/* <Todolist /> */}

      //   {/* 父-子组件传值，方法和整个组件 */}
      //   {/* <Header title="父组件的值" run={this.run} news={this} /> */}
      // </div>

      <Router>
        <Layout>
          <Sider
            trigger={null}
            collapsible
            collapsed={this.state.collapsed}
          >
            <div className="logo" />
            <Menu theme="dark" mode="inline" defaultSelectedKeys={["1"]}>
              <Menu.Item key="1">
                <Icon type="user" />
                <span>
                  <Link to="/">Home</Link>
                </span>
              </Menu.Item>
              <Menu.Item key="2">
                <Icon type="video-camera" />
                <span>
                  <Link to={`/reactform?title=${this.state.title}`}>
                    ReactForm
                  </Link>
                </span>
              </Menu.Item>
              <Menu.Item key="3">
                <Icon type="upload" />
                <span>
                  <Link to={`/todolist/${this.state.title}`}>Todolist</Link>
                </span>
              </Menu.Item>
            </Menu>
          </Sider>
          <Layout>
            <Header style={{ background: "#fff", padding: 0 }}>
              <Icon
                className="trigger"
                type={this.state.collapsed ? "menu-unfold" : "menu-fold"}
                onClick={this.toggle}
              />
            </Header>
            <Content
              style={{
                margin: "24px 16px",
                padding: 24,
                background: "#fff",
                minHeight: 280
              }}
            >
              {routes ? routes.map((route, key) => {
                return (
                  <Route
                    key={key}
                    exact
                    path={route.path}
                    component={route.component}
                  />
                );
              }) : ""}
            </Content>
          </Layout>
        </Layout>
      </Router>

      // <Router>
      //   <div>
      //     {/* <Link to="/">Home</Link>
      //     <Link to={`/reactform?title=${this.state.title}`}>ReactForm</Link>
      //     <Link to={`/todolist/${this.state.title}`}>Todolist</Link> */}

      //     {/* <Route exact path="/" component={Home} />
      //     <Route path="/reactform" component={ReactForm} />
      //     <Route path="/todolist/:id" component={Todolist} /> */}
      //   </div>
      // </Router>
    );
  }
}

export default App;
