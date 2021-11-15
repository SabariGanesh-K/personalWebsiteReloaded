import React, { Component } from "react";
import { Nav,Collapse, Navbar, NavbarToggler, NavItem, Button } from "reactstrap";
import {NavLink} from 'react-router-dom';

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
  }



  render() {
    const moreMenu = (status) => {
      if (status) {
        return (
          <Nav navbar>
          <NavItem>
            <span className = "fa fa-2x fa-home">HOME</span>
          </NavItem>
        </Nav>
        )
      }
    }

    return (
      <React.Fragment>
      
        <Navbar dark expand = "md">
          <div className = "container">
         <Button onClick = {this.toggleNav} > <span className="fa fa-3x  fa-compass"> ></span>  </Button>
          {moreMenu(this.state.isNavOpen)}
        </div>
        </Navbar>
      
      </React.Fragment>
    );
  }
}

export default Header;
