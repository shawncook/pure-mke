import React, { Component } from "react";
import { slide as HamburgerMenu } from "react-burger-menu";
import { Link } from "react-router-dom";
import IconFlag from '../../img/flag.svg';
import { ReactComponent as IconClose } from '../../img/icon-close.svg';
import "./menu.scss";

class Menu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  // This keeps your state in sync with the opening/closing of the menu
  // via the default means, e.g. clicking the X, pressing the ESC key etc.
  handleStateChange(state) {
    this.setState({ menuOpen: state.isOpen });
  }

  // This can be used to close the menu, e.g. when a user clicks a menu item
  closeMenu() {
    this.setState({ menuOpen: false });
  }

  // This can be used to toggle the menu, e.g. when using a custom icon
  // Tip: You probably want to hide either/both default icons if using a custom icon
  // See https://github.com/negomi/react-burger-menu#custom-icons
  toggleMenu() {
    this.setState(state => ({ menuOpen: !state.menuOpen }));
  }

  render() {
    return (
      <HamburgerMenu
        isOpen={this.state.menuOpen}
        onStateChange={state => this.handleStateChange(state)}
        bodyClassName={"menu-open"}
        className={"app__menu"}
        burgerButtonClassName={"app__menu-button"}
        styles={{
          bmMenu: {
            backgroundImage: `url(${IconFlag})`
          }
        }}
      >
        <button
          onClick={() => this.closeMenu()}
        >
          <IconClose />
        </button>
        <Link onClick={() => this.closeMenu()} to="/">
          Home
        </Link>
        <Link onClick={() => this.closeMenu()} to="/logo-discounts">
          Logo Discounts
        </Link>
        <Link onClick={() => this.closeMenu()} to="/recycling-map">
          Recycling Map
        </Link>
        <Link onClick={() => this.closeMenu()} to="/about-us">
          About
        </Link>
        <Link onClick={() => this.closeMenu()} to="/resources">
          Resources
        </Link>
      </HamburgerMenu>
    );
  }
}

export default Menu;
