import React from "react";

class ReactForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      sex: "1",
      city: "",
      citys: ["北京", "上海", "深圳"],
      hobby: [
        {
          title: "睡觉",
          checked: true
        },
        {
          title: "吃饭",
          checked: false
        },
        {
          title: "敲代码",
          checked: true
        }
      ],
      info: ""
    };
  }

  handleName = e => {
    this.setState({
      name: e.target.value
    });
  };

  handleSex = e => {
    // console.log(typeof e.target.value);
    this.setState({
      sex: e.target.value
    });
  };

  handleCity = e => {
    this.setState({
      city: e.target.value
    });
  };

  handleHobby = (key, e) => {
    let hobby = this.state.hobby;
    hobby[key].checked = !hobby[key].checked;
    this.setState({
      hobby
    });
  };

  handleInfo = e => {
    this.setState({
      info: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    console.log(
      this.state.name,
      this.state.sex,
      this.state.city,
      this.state.hobby,
      this.state.info
    );
  };

  render() {
    return (
      <div className="reactform">
        <h2>表单组件</h2>
        <form onSubmit={this.handleSubmit}>
          用户名：
          <input
            type="text"
            value={this.state.name}
            onChange={this.handleName}
          />
          <br />
          性别：
          <input
            type="radio"
            value="1"
            checked={this.state.sex === "1"}
            onChange={this.handleSex}
          />
          男
          <input
            type="radio"
            value="2"
            checked={this.state.sex === "2"}
            onChange={this.handleSex}
          />
          女
          <br />
          居住城市：
          <select value={this.state.city} onChange={this.handleCity}>
            {this.state.citys.map((item, key) => {
              return <option key={key}>{item}</option>;
            })}
          </select>
          <br />
          爱好：
          {this.state.hobby.map((item, key) => {
            return (
              <span key={key}>
                {item.title}
                <input
                  type="checkbox"
                  checked={item.checked}
                  onChange={this.handleHobby.bind(this, key)}
                />
                {item.title}
              </span>
            );
          })}
          <br />
          备注：
          <textarea value={this.state.info} onChange={this.handleInfo} />
          <br />
          <input type="submit" defaultValue="提交" />
        </form>
      </div>
    );
  }
}

export default ReactForm;
