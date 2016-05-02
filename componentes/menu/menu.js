import React, { Component, PropTypes as PT } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Menu extends Component {

  render(){
    return(
      <Navbar fluid={true} fixedTop={true} >
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">React-News</a>
          </Navbar.Brand>
        </Navbar.Header>
        <Nav>
          <NavItem eventKey={1} href="#">Link</NavItem>
          <NavItem eventKey={2} href="#">Link</NavItem>
        </Nav>
      </Navbar>
    )
  }
}
export default Menu
