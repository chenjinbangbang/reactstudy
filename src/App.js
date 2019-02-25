import React, { Component } from "react";
// import logo from './assets/images/logo.svg';
import "./assets/css/App.css";

import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

// 引入组件
import Home from "./components/Home";
import ReactForm from "./components/ReactForm";
import Todolist from "./components/Todolist";
// import Header from "./components/Header";

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
      // <div className="App">
      //   {/* <Home /> */}
      //   {/* <ReactForm /> */}
      //   {/* <Todolist /> */}

      //   {/* 父-子组件传值，方法和整个组件 */}
      //   {/* <Header title="父组件的值" run={this.run} news={this} /> */}
      // </div>
      <Router>
        <div>
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
