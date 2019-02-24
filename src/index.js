import React from "react";
import ReactDOM from "react-dom";
import "./assets/css/index.css";
import App from "./App"; // 引入App.js这个组件
import * as serviceWorker from "./serviceWorker"; // 不用管，加快react运行速度的一个js文件

// class X {
//   constructor() {
//     this.name = "jinbang";
//   }
//   run() {
//     console.log(this.name);
//   }
// }
// class Y extends X {
//   constructor() {
//     super();
//     this.age = 20;
//   }
//   run1() {
//     console.log(this.age);
//   }
// }
// let y = new Y();
// y.run1();

ReactDOM.render(<App />, document.getElementById("root"));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
