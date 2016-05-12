import React, { Component, PropTypes as PT } from 'react'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import Menu from "../menu"
import Noticia from "../noticia"

class Pagina extends Component {
  render(){
    return(
      <div>
        <Menu></Menu>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              <Noticia></Noticia>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}
export default Pagina
