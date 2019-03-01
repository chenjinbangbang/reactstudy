import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      msg: "我是个人中心"
    };
  }
  render() {
    return <div className="main">我是个人中心组件</div>;
  }
}

export default Main;
