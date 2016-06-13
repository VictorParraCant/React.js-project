import React, { Component, PropTypes as PT } from 'react'
import {Navbar, Nav, NavItem} from 'react-bootstrap'

class Menu extends Component {

  static PropTypes = {
    handleClick: PT.functions
  }

  static defaultProps = {
    handleClick: () => {}
  }

  detectarClick(e) {
    e.preventDefault();
    this.props.handleClick(e.target.href)
  }

  render(){
    return(
      <div id="menu">
        <Navbar fluid={true} fixedTop={true} >
          <Navbar.Header>
            <Navbar.Brand>
              <p>React-News</p>
            </Navbar.Brand>
          </Navbar.Header>
          <Nav>
            <NavItem eventKey={1} href="https://www.reddit.com/r/reactjs.json" onClick={::this.detectarClick} >REACT</NavItem>
            <NavItem eventKey={2} href="https://www.reddit.com/r/gifs.json" onClick={::this.detectarClick} >GIFS</NavItem>
          </Nav>
        </Navbar>
      </div>
    )
  }
}
export default Menu
