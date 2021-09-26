import React from "react";
import { Navbar } from 'react-bulma-components';

class Menu extends React.Component {
  showSettings(event) {
    event.preventDefault();
  }

  render() {
    return (
      <Navbar.Brand>
        <Navbar.Item href="/">
          <Navbar.Link>Home</Navbar.Link>
        </Navbar.Item>
        
        <Navbar.Item href="#">
          <Navbar.Link>Item</Navbar.Link>
          <Navbar.Dropdown>
            <Navbar.Item href="#">Subitem 1</Navbar.Item>
            <Navbar.Item href="#">Subitem 2</Navbar.Item>
          </Navbar.Dropdown>
        </Navbar.Item>

      </Navbar.Brand>
    );
  }
}

export default Menu;
