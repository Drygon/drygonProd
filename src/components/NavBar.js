import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavDropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { AboutUsPage, DrawingsPage, HomePage, TransmittalPage } from '../layout';
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
  },
  {
    path: '/transmittal',
    component: TransmittalPage,
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
    <NavDropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="bg-primary">
            <DropdownToggle nav caret >
              Drawings
          </DropdownToggle>
            <DropdownMenu className="bg-primary" >
              <DropdownItem to="/drawings"
                activeClassName="active"
                activeStyle={style}
                tag={RRNavLink} >Dicipline Interface Chart
            </DropdownItem>
              <DropdownItem to="/transmittal"
                activeClassName="active"
                activeStyle={style}
                tag={RRNavLink}>Transmittal
            </DropdownItem>
            </DropdownMenu>
          </NavDropdown>          
          <NavItem>
            <NavLink to="/training" activeClassName="active" activeStyle={style} tag={RRNavLink}>Training</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/services" activeClassName="active" activeStyle={style} tag={RRNavLink}>Services</NavLink>
          </NavItem>
          <NavItem>
            <NavLink to="/stories" activeClassName="active" activeStyle={style} tag={RRNavLink}>Stories</NavLink></NavItem>
          <NavItem>
            <NavLink to="/designs" activeClassName="active" activeStyle={style} tag={RRNavLink} >Designs</NavLink>
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
    this.toggleDropdown = this.toggleDropdown.bind(this);
    this.state = {
      collapsed: true,
      dropdownOpen: false
    }
  }
  componentWillUnmount() {
    this.setState = {
      collapsed: true,
      dropdownOpen: false
    }
  }

  toggle() {
    this.setState({
      collapsed: !this.state.collapsed,
      dropdownOpen: !this.state.dropdownOpen

    });
  }
  
  toggleDropdown() {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen
    });
  }
  render() {
    return (
      <div>
        <Links toggle={this.toggle} 
              collapsed={this.state.collapsed}
              toggleDropdown={this.toggleDropdown}              
              dropdownOpen={this.state.dropdownOpen} />

        {routes.map((route, i) => (
          <RouteWithSubRoutes key={i} {...route} />
        ))}
      </div>
    );
  }
}

export default NavBar;