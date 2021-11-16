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
    const icons = {contact:'../../shared/icons/glass-cheers-solid'}
    const moreMenu = (status) => {
      if (status) {
        return (
          <Nav navbar>
          <NavItem>
          
          <Button className="headerButtons"  > <span className="fa fa-2x  fa-home"></span> HOME </Button>
          <Button className="headerButtons"  > <span className="fa fa-2x  fa-code"></span> CODINGZ </Button>
          <Button className="headerButtons"  > <span className="fa fa-2x  fa-user-secret"></span> ABOUT ME  </Button>
          <Button className="headerButtons"  > <span className="fa fa-2x  fa-coffee"></span> CATCH ME  </Button>
          </NavItem>
        </Nav>
        )
      }
    }

    return (
      <React.Fragment>
      
        <Navbar dark expand = "md">
          <div className = "container">
            <br/>
         <Button className="headerButtons" onClick = {this.toggleNav} > <span className="fa fa-4x  fa-compass"></span>  </Button>
          {moreMenu(this.state.isNavOpen)}
        </div>
        </Navbar>
      
      </React.Fragment>
    );
  }
}

export default Header;
