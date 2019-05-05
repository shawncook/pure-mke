import React, { Component } from "react";
import Menu from "../menu/index";
import './header.scss';
import { Link } from "react-router-dom";
import logo from '../../img/logo.png';


const appName = "PureMKE"

class Header extends Component {
  state = {};
  render() {
    return (
      <header
        className="app__header"
      >
        <Menu />
        <h1
          className="app__branding"
        >
          <Link
            to="/"
          >
            <img
              alt={appName}
              src={logo}
              height="40"
              width="40"
            />
          </Link>
        </h1>
      </header>
    );
  }
}

export default Header;
