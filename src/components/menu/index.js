import React, { Component } from "react";
import { slide as HamburgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";

class Menu extends Component {
  render() {
    return (
      <>
        <div>
          <HamburgerMenu>
            <Link to="/">Home</Link>
            <Link to="/logo-discounts">Logo Discounts</Link>
            <Link to="/recycling-map">Recycling Map</Link>
            <Link to="/about-us">About</Link>
          </HamburgerMenu>
        </div>
      </>
    );
  }
}

export default Menu;
