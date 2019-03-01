import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
// import logo from './assets/images/logo.svg';
import "./assets/css/App.css";

import { Button } from 'antd';

// 引入组件
import Home from "./components/Home";
import ReactForm from "./components/ReactForm";
import Todolist from "./components/Todolist";
// import Header from "./components/Header";
// import Axios from "./components/Axios";

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
        <div>
          <Button type="primary">primary</Button>
          <Link to="/">Home</Link> 
          <Link to={`/reactform?title=${this.state.title}`}>ReactForm</Link> 
          <Link to={`/todolist/${this.state.title}`}>Todolist</Link> 

          <Route exact path="/" component={Home}></Route>
          <Route exact path="/reactform" component={ReactForm}></Route>
          <Route exact path="/todolist/:id" component={Todolist}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
