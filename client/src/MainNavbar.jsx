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
  import { Link } from 'react-router-dom';
  import api from './api';

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
              <NavLink style={{color:"white"}} href="/list">List</NavLink>
              <NavLink style={{color:"white"}} href="/map">Map</NavLink>
              <NavLink style={{color:"white"}} href="/new-street-art">New Street Art</NavLink>
              {!api.isLoggedIn() && <NavLink style={{color:"white"}} href="/signup">Sign Up</NavLink>}
              {!api.isLoggedIn() && <NavLink to="/login">Login</NavLink>}
              {api.isLoggedIn() && <Link to="/" onClick={(e) => this.handleLogoutClick(e)}>Logout</Link>}
            <NavLink to="/secret">Secret</NavLink>
            </Nav>
          </Collapse>
        </Navbar>
      </div>
    );
  }
}