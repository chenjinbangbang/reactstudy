import React, { Component } from "react";

class Todolist extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [
        {
          title: "录制ionic",
          checked: true
        },
        {
          title: "录制nodejs",
          checked: false
        },
        {
          title: "录制egg.js",
          checked: false
        },
        {
          title: "录制vue",
          checked: true
        }
      ]
    };
  }

  addData = e => {
    if (e.keyCode === 13) {
      let title = this.refs.title.value;
      let tempList = this.state.list;
      tempList.push({
        title,
        checked: false
      });
      this.setState({
        list: tempList
      });
      this.refs.title.value = "";
    }
  };

  checkboxChange = key => {
    let tempList = this.state.list;
    tempList[key].checked = !tempList[key].checked;
    this.setState({
      list: tempList
    });
  };

  removeData = key => {
    let tempList = this.state.list;
    tempList.splice(key, 1);
    this.setState({
      list: tempList
    });
  };

  render() {
    return (
      <div>
        <header className="title">
          TodoList: <input ref="title" onKeyUp={this.addData} />
        </header>
        <hr />
        <h3>代办事项</h3>
        <ul>
          {this.state.list.map((item, key) => {
            if (!item.checked) {
              return (
                <li key={key}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={this.checkboxChange.bind(this, key)}
                  />
                  {item.title} ----
                  <button onClick={this.removeData.bind(this, key)}>
                    删除
                  </button>
                </li>
              );
            }
          })}
        </ul>
        <h3>已完成事项</h3>
        <ul>
          {this.state.list.map((item, key) => {
            if (item.checked) {
              return (
                <li key={key}>
                  <input
                    type="checkbox"
                    checked={item.checked}
                    onChange={this.checkboxChange.bind(this, key)}
                  />
                  {item.title} ----
                  <button onClick={this.removeData.bind(this, key)}>
                    删除
                  </button>
                </li>
              );
            }
          })}
        </ul>
      </div>
    );
  }
}

export default Todolist;
