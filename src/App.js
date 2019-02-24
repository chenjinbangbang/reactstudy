import React, { Component } from "react";
// import logo from './assets/images/logo.svg';
import "./assets/css/App.css";

// 引入组件
// import Home from "./components/Home";
// import ReactForm from "./components/ReactForm";
// import Todolist from "./components/Todolist";
import Header from "./components/Header";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      title: "组件"
    };
  }

  run = () => {
    console.log("父组件的run方法");
  };

  render() {
    return (
      <div className="App">
        {/* <Home /> */}
        {/* <ReactForm /> */}
        {/* <Todolist /> */}

        {/* 父-子组件传值，方法和整个组件 */}
        <Header title="父组件的值" run={this.run} news={this} />

        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header> */}
      </div>
    );
  }
}

export default App;
