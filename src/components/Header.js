import React from "react";
import "./Header.css";

export default class Header extends React.Component {
  root = () => {
    this.props.history.push("/");
  };

  render() {
    return (
      <div className="header">
        <div className="header-title" onClick={this.root}></div>
      </div>
    );
  }
}
