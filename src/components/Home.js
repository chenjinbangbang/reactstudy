import React, { Component } from "react";

import logo from "../assets/images/1.jpg";

class Home extends Component {
  // 构造函数，若里面为空则注释掉，否则报错
  constructor(props) {
    // super关键字，用于继承，指代父类的实例（即父类的this对象）。子类必须在constructor方法中调用super方法，否则新建实例时会报错，
    // 这是因为子类没有自己的this对象，而是继承父类的this对象，然后对其进行加工。如果不调用super方法，子类就得不到this对象
    // super();
    super(props); // 用于父子组件传值，推荐这样写
    this.state = {
      name: "张三",
      color: "red",
      list: ["列表1", "列表2", "列表3"],
      username: ""
    };

    // 改变run方法this的指向
    // this.run = this.run.bind(this);

    // setTimeout(() => {
    //   this.setState({
    //     username: "李四"
    //   });
    // }, 4000);
  }

  //定义方法
  // run(){
  //   console.log('定义方法，', this.state.name);
  // }
  run = (msg, e) => {
    console.log(msg);
    console.log(e);
    console.log(e.target);
    // e.target.style.color = "red";
    console.log("定义方法，", this.state.name);
  };

  inputChange = e => {
    this.setState({
      // username: e.target.value // 使用事件对象
      username: this.refs.username.value // 使用ref
    });
  };

  getInput = () => {
    console.log(this.state.username);
  };

  keyup = () => {
    console.log("keyup");
  };

  render() {
    // 定义列表
    let list = this.state.list.map((item, key) => {
      return <li key={key}>{item}</li>;
    });
    return (
      <div className="home">
        {/* 属性使用{}括起来，className替换掉class，onClick执行方法 */}
        <h2 title={this.state.name} className={this.state.color}>
          Home组件 {this.state.name}
        </h2>

        {/* htmlFor替换掉for */}
        <label htmlFor="name">姓名</label>
        <input id="name" />

        {/* style要用{{}}括起来，不能用"" */}
        <div style={{ color: "blue" }}>行内样式</div>

        {/* 引入图片，1.使用import，2.使用require，3.引入远程图片直接写 */}
        <img src={logo} alt="" />
        {/* <img src={require('../assets/images/1.jpg')} /> */}
        {/* <img src="http://www.mjpai.cn/1.jpg"/> */}

        {/* 定义列表 */}
        <ul>{list}</ul>
        <ul>
          {this.state.list.map((item, key) => {
            return <li key={key}>{item}</li>;
          })}
        </ul>

        {/* 执行方法，第1种方法：在jsx中使用bind(this)改变run方法this的指向，第2种方法：在constructor中使用bind(this)改变run方法this的指向，第3种方法：使用箭头函数编写方法 */}
        {/* <button onClick={this.run.bind(this)}>执行方法</button> */}
        <button onClick={this.run.bind(this, "传值")}>执行方法</button>

        <input
          ref="username"
          onChange={this.inputChange}
          value={this.state.username}
        />
        <input ref="username" defaultValue={this.state.username} />
        <p>{this.state.username}</p>
        <button onClick={this.getInput}>获取input的值</button>

        {/* <input onKeyUp={this.keyup} /> */}
      </div>
    );
  }
}
export default Home;
