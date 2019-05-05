import React, { Component } from "react";
import { slide as HamburgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";
import './menu.scss';
// import './menu.css';

class Menu extends Component {
  render() {
    return (
      <HamburgerMenu
        bodyClassName={"menu-open"}
        className={"app__menu"}
        burgerButtonClassName={"app__menu-button"}
      >
        <Link to="/">
          Home
        </Link>
        <Link to="/logo-discounts">
          Logo Discounts
        </Link>
        <Link to="/recycling-map">
          Recycling Map
        </Link>
        <Link to="/about-us">
          About
        </Link>
      </HamburgerMenu>
    );
  }
}

export default Menu;
