import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { AboutUsPage, DrawingsPage, HomePage } from '../layout';
import HeaderLogo from './HeaderLogo';

const routes = [
  {
    path: '/',
    component: HomePage,
    exact: true
  }
  , {
    path: '/aboutus',
    component: AboutUsPage
  },
  {
    path: '/drawings',
    component: DrawingsPage,
  } 
]

const style = { color: "#5cb85c"}

const Links = ({ toggle, toggleDropdown, collapsed, dropdownOpen }) => (
  <div className="header page-header">
    <Navbar toggleable light fixed="top" className="navbar-inverse bg-primary">
      <NavbarBrand tag={RRNavLink} to="/" activeClassName="active">
        <HeaderLogo />
      </NavbarBrand>
      <NavbarToggler right onClick={toggle} />      
      <Collapse className="navbar-toggleable-md" isOpen={collapsed} navbar id="navbarColor01">
        <Nav className="ml-auto mb-4" navbar>
        <NavItem>
          <NavLink to="/aboutus" activeClassName="active" activeStyle={style} tag={RRNavLink}>About Us</NavLink>
        </NavItem> 
        <NavItem>
          <NavLink to="/drawings" activeClassName="active" activeStyle={style} tag={RRNavLink}>Drawings</NavLink>
        </NavItem>                
          <NavItem>
            <NavLink to="/training" activeClassName="active" activeStyle={style} tag={RRNavLink}>Training</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services" activeClassName="active" activeStyle={style} tag={RRNavLink}>Services</NavLink>
          </NavItem>          
        </Nav>
      </Collapse>
    </Navbar>
  </div>
);

class NavBar extends Component {
  constructor(props) {
    super(props);
    this.toggle = this.toggle.bind(this);        
    this.state = {
      collapsed: true,    
    }
  }
  componentWillUnmount() {
    this.setState = {
      collapsed: true     
    }
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,   

    });
  }
  
  render() {
    return (
      <div>
        <Links toggle={this.toggle} 
              collapsed={this.state.collapsed}                        
              />

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}

export default NavBar;