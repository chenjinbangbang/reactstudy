import React, { Component } from "react";
import axios from "axios";
// import fetchJsonp from "fetch-jsonp";

class Axios extends Component {
  // 组件加载之前
  constructor(props) {
    console.log("01构造函数");
    super(props);
    this.state = {
      list: []
    };

    // fetchJsonp("http://localhost:4000/string")
    //   .then(res => {
    //     return res.json();
    //   })
    //   .then(json => {
    //     this.setState({
    //       list: json.data
    //     });
    //   })
    //   .catch(err => {
    //     console.log(err);
    //   });
  }

  // 组件将要挂载的时候触发的生命周期函数
  componentWillMount() {
    console.log("02组件将要挂载");
  }

  // 组件挂载完成的时候触发的生命周期函数，dom操作放在这个里面，请求数据也放在这个里面
  componentDidMount() {
    console.log("04组件挂载完成");

    this.getData();
    console.log(this.refs.ul);
  }

  getData = () => {
    axios({
      url: "http://localhost:4000/string",
      method: "get"
    })
      .then(res => {
        // console.log(res);
        this.setState({
          list: res.data
        });
      })
      .catch(err => {
        console.log(err);
      });
  };

  // 是否要更新数据，如果返回true才会执行更新数据的操作（参数，nextProps：当前父组件传过来的数据，nextState：当前组件的数据）
  shouldComponentUpdate(nextProps, nextState) {
    console.log("01是否要更新数据");
    console.log(nextProps);
    console.log(nextState);
    return true;
  }

  // 将要更新数据的时候触发
  componentWillUpdate() {
    console.log("02组件将要更新");
  }

  // 组件数据更新完成
  componentDidUpdate() {
    console.log("03组件数据更新完成");
  }

  // 在父组件里面改变props传值的时候触发的
  componentWillReceiveProps() {
    console.log("父子组件传值，父组件里面改变了props的值触发的方法");
  }

  // 组件销毁的时候触发的生命周期函数
  componentWillUnmount() {
    console.log("组件销毁了");
  }

  // 初始化渲染，更新数据时触发
  render() {
    console.log("03数据渲染render");
    return (
      <div className="axios">
        <button onClick={this.getData}>更新数据 {this.props.axiosVal}</button>
        <ul ref="ul">
          {this.state.list.map((item, key) => {
            return (
              <li key={key}>
                {item.id} -- {item.username}
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}

export default Axios;
