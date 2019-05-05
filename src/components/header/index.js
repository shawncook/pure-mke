import React, { Component } from "react";
import Menu from "../menu/index";

class Header extends Component {
  state = {};
  render() {
    return (
      <>
        <header>
            <Menu />
            This is a header</header>
      </>
    );
  }
}

export default Header;
