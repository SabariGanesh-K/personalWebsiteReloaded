import React, { Component } from "react";
import { Nav,Collapse, Navbar, NavbarToggler, NavItem, Button } from "reactstrap";
import {NavLink} from 'react-router-dom';
import { Card, Row, Col } from "react-bootstrap";
import './header.css'
class DesktopHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isNavOpen: false,
      exploreText : "EXPLORE"
    };
    this.toggleNav = this.toggleNav.bind(this);
  }

  toggleNav() {
    this.setState({ isNavOpen: !this.state.isNavOpen });
    if (this.state.exploreText === "EXPLORE") {
      this.setState({ exploreText: "" });
    }
    else {
      this.setState({ exploreText: "EXPLORE" });
    }
  }



  render() {
    const icons = {contact:'../../shared/icons/glass-cheers-solid'}
 
    const moreMenu = (status) => {
      if (status) {
        return (
          <div style = {{display:'flex',justifyContent:'left'}}>
          <Nav navbar>
            <Row>
              <Col>
          <NavItem>
          
          <NavLink className = "nav-link" to = "/home">
          <button className = "buttons" style = {{padding:'0rem'}} onClick = {this.toggleNav}> <span className="fa fa-1x  fa-home"></span> HOME </button>
          </NavLink>
      
          <NavLink className = "nav-link" to = "/codingz">
          <button className = "buttons" style = {{padding:'0rem'}} onClick = {this.toggleNav}  > <span className="fa fa-1x  fa-code"></span> CODINGZ </button>
          </NavLink>
      
          <NavLink className = "nav-link" to = "/about">
          <button className = "buttons" style = {{padding:'0rem'}} onClick = {this.toggleNav} > <span className="fa fa-1x  fa-user-secret"></span> ABOUT ME  </button>
          </NavLink>
 
          <NavLink className = "nav-link" to = "/contact">
          <button className = "buttons"  style = {{padding:'0rem'}} onClick = {this.toggleNav}> <span className="fa fa-1x  fa-coffee"></span> CATCH ME  </button>
          </NavLink>

          <NavLink className = "nav-link" to = "/projects">
          <button className = "buttons" style = {{padding:'0rem'}} onClick = {this.toggleNav} > <span className="fa fa-1x  fa-brain-circuit"></span> PROJECTS  </button>
          </NavLink>
      
          </NavItem>
          </Col>
          </Row>
        </Nav>
        </div>
       
        )
      }
    }

    return (

      <React.Fragment>
      
      {/* <div className = "large-devices"> */}
      <Navbar dark expand = "md">
       
       <div className="header-button-containers">
          
          <NavLink className = "nav-link" to = "/home">
          <button className = "buttons" style = {{padding:'0rem'}} onClick = {this.toggleNav}> <span className="fa fa-1x  fa-home"></span> HOME </button>
          </NavLink>
      
          <NavLink className = "nav-link" to = "/codingz">
          <button className = "buttons" style = {{padding:'0rem'}} onClick = {this.toggleNav}  > <span className="fa fa-1x  fa-code"></span> CODINGZ </button>
          </NavLink>
      
          <NavLink className = "nav-link" to = "/about">
          <button className = "buttons" style = {{padding:'0rem'}} onClick = {this.toggleNav} > <span className="fa fa-1x  fa-user-secret"></span> ABOUT ME  </button>
          </NavLink>
 
          <NavLink className = "nav-link" to = "/contact">
          <button className = "buttons"  style = {{padding:'0rem'}} onClick = {this.toggleNav}> <span className="fa fa-1x  fa-coffee"></span> CATCH ME  </button>
          </NavLink>

          <NavLink className = "nav-link" to = "/projects">
          <button className = "buttons" style = {{padding:'0rem'}} onClick = {this.toggleNav} > <span className="fa fa-1x  fa-brain-circuit"></span> PROJECTS  </button>
          </NavLink>
      
         </div>
        </Navbar>
      {/* </div> */}
    
      
      </React.Fragment>
      
    );
  }
}

export default DesktopHeader;
