import React, { Component, PropTypes as PT } from 'react'
import {Col, Clearfix, Thumbnail, Button} from 'react-bootstrap'


const Noticia = props => (
      <Col xs={12} sm={4} md={3}>
        <Thumbnail src={props.img} alt="Image">
            <h3>{props.titulo}</h3>
            {props.texto ? <p>{props.texto}</p> :
              <p>Lo sentimos, en estos momentos no existe descripcion de la noticia.</p>}
            <p>
              <Button href={props.link}>Leer más</Button>
            </p>
        </Thumbnail>
      </Col>
)

Noticia.PropTypes = {
  titulo: PT.string.isRequired,
  img:    PT.string.isRequired,
  texto:  PT.string.isRequired,
  link:   PT.string.isRequired
};

export default Noticia
