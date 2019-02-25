import React, { Component } from "react";
import PropTypes from "prop-types";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  run = data => {
    console.log("子组件的run方法，父组件的参数：", data);
  };

  render() {
    // console.log(this.props.news);
    return (
      <div>
        <h2 onClick={this.props.run.bind(this, "子组件数据")}>
          {this.props.title}
        </h2>
      </div>
    );
  }
}

// defaultProps：父子组件传值的默认值，propTypes：验证父组件传值的类型合法性（需要引入）
Header.defaultProps = {
  title: "默认标题"
};
Header.propTypes = {
  title: PropTypes.string
};

export default Header;
