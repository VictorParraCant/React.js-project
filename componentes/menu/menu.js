import React, { Component, PropTypes as PT } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Menu extends Component {

  render(){
    return(
      <div id="menu">
        <Navbar fluid={true} fixedTop={true} >
          <Navbar.Header>
            <Navbar.Brand>
              <p>React-News</p>
            </Navbar.Brand>
          </Navbar.Header>
        </Navbar>
      </div>
    )
  }
}
export default Menu
