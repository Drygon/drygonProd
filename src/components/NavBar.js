import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavDropdown, DropdownItem, DropdownMenu, DropdownToggle, NavItem, NavLink, NavbarToggler } from 'reactstrap';
import { NavLink as RRNavLink } from 'react-router-dom';
import RouteWithSubRoutes from './RouteWithSubRoutes';
import { AboutUsPage, ContactUsPage, DrawingsPage, HomePage} from '../layout';
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
  }
  , {
    path: '/contactus',
    component: ContactUsPage
  },
  {
    path: '/drawings',
    component: DrawingsPage,
  }
]

const style = { fontWeight: 'bold'}

const Links = ({ toggle, toggleDropdown, collapsed, dropdownOpen }) => (
  <div className="header page-header">
    <Navbar toggleable light fixed="top" className="navbar-inverse bg-primary">
      <NavbarBrand tag={RRNavLink} to="/" activeClassName="active">
        <HeaderLogo />
      </NavbarBrand>
      <NavbarToggler right onClick={toggle} />      
      <Collapse className="navbar-toggleable-md" isOpen={collapsed} navbar id="navbarColor01">
        <Nav className="ml-auto mb-4" navbar>
          <NavDropdown isOpen={dropdownOpen} toggle={toggleDropdown} className="bg-primary">
            <DropdownToggle nav caret >
              About Us
          </DropdownToggle>
            <DropdownMenu className="bg-primary" >
              <DropdownItem to="/aboutus"
                activeClassName="active"
                activeStyle={style}
                tag={RRNavLink} >Drygon Consulting Inc.
            </DropdownItem>
              <DropdownItem to="/contactus"
                activeClassName="active"
                activeStyle={style}
                tag={RRNavLink}>Contact Us
            </DropdownItem>
            </DropdownMenu>
          </NavDropdown>
          <NavItem>
            <NavLink to="/drawings" activeClassName="active" activeStyle={style} tag={RRNavLink}>Drawings</NavLink>
          </NavItem>
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
      collapsed: !this.state.collapsed
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