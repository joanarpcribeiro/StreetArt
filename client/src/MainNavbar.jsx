// components/navbar/Navbar.js
import React from 'react';
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

export default class NavBar extends React.Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }
  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }
  render() {
    return (
      <div>
        <Navbar className= "Navbar" dark expand="md">
          <NavbarBrand href="/">MERN Street Art</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="ml-auto" navbar>
              <NavItem>
                <NavLink style={{color:"white"}} href="/list">List</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:"white"}} href="/map">Map</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:"white"}} href="/new-street-art">New Street Art</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:"white"}} href="/signup">Sign Up</NavLink>
              </NavItem>
              <NavItem>
                <NavLink style={{color:"white"}} href="/login">Login</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}