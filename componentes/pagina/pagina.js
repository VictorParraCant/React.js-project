import React, { Component, PropTypes as PT } from 'react'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import Menu from "../menu"

class Pagina extends Component {
  render(){
    return(
      <div>
        <Menu></Menu>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={8}>Pedro</Col>
            <Col xs={6} md={4}>Victor</Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Pagina
