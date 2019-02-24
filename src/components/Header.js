import React, { Component } from "react";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    console.log(this.props.news);
    return (
      <div>
        <h2 onClick={this.props.run}>{this.props.title}</h2>
      </div>
    );
  }
}

export default Header;
