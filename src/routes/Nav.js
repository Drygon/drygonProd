import React, { Component } from 'react';
import { NavLink, Route, Switch } from 'react-router-dom';
import { Collapse, NavbarToggler } from 'reactstrap';
import NavLogo from './NavLogo';
import { About,Drawings, Home, Page404 } from '../layout';
import DrawingRequestForm from '../layout/drawings/DrawingRequestForm';
const Training = () => (<div>trainig</div>);
const Services = () => (<div>services</div>);


const Links = ({ collapsed, toggleNavbar }) => (
<nav className="navbar navbar-toggleable-sm navbar-inverse bg-primary fixed-top">    
      <div className="container">      
      <NavbarToggler right onClick={toggleNavbar} />       
      <NavLink className="navbar-brand" to="/">
        <NavLogo />
      </NavLink>
      <div className="drygoncontainer">
      <Collapse className="navbar-collapse" id="navbarDrygon" isOpen={collapsed}>
        <ul className="navbar-nav mr-auto justify-content-around">     
          <li className="nav-item">
           <NavLink exact activeClassName="active" to="/about" 
           className="nav-link" onClick={toggleNavbar}>About Us</NavLink>
          </li>
          <li className="nav-item">
            <NavLink activeClassName="active" to="/drawings" 
            className="nav-link" onClick={toggleNavbar}>Drawings</NavLink>
          </li>
           <li className="nav-item">
            <NavLink activeClassName="active" to="/training" 
            className="nav-link" onClick={toggleNavbar}>Training</NavLink>
          </li>
           <li className="nav-item">
            <NavLink activeClassName="active" to="/services" 
            className="nav-link" onClick={toggleNavbar} >Services</NavLink>
          </li>          
        </ul>        
      </Collapse>    
      
      </div>      
      </div>
    </nav>
);


class Nav extends Component {
    constructor(props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.handleResize = this.handleResize.bind(this);
    this.state = {
      collapsed: false,
      windowWidth: window.innerWidth
    };
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize);
  }
  
componentWillUnmount() {
    this.setState = {
      collapsed: false    
    }
    window.removeEventListener('resize', this.handleResize);
  }

  handleResize() {
    this.setState({
      windowWidth: window.innerWidth
    });
  }
  toggleNavbar() {
    if(this.state.windowWidth <= 768) {
    this.setState({
      collapsed: !this.state.collapsed
    });
    }
  }
    render() {
        return (
            <div className="drygoncontainer">
                <Links collapsed={this.state.collapsed} toggleNavbar={this.toggleNavbar} />
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/about" component={About} />
                    <Route path="/drawings" component={Drawings} />
                    <Route path="/training" component={Training} />
                    <Route path="/services" component={Services} />
                    <Route path="/drawingrequestform" component={DrawingRequestForm} />
                    <Route render={Page404} />
                </Switch>
            </div>
        );
       
    }

}

export default Nav;