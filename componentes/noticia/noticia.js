import React, { Component, PropTypes as PT } from 'react'
import {Col, Clearfix, Thumbnail, Button} from 'react-bootstrap'
import Texto from '../texto'
import Titulo from '../titulo'

const Noticia = props => {

  return(
      <Col xs={12} sm={4} md={3}>
        <Thumbnail src={props.img} alt="Image">
            <Titulo tituloNoticia={props.titulo}></Titulo>
            <Texto descripcion={props.texto}></Texto>
            <p className='autor'>Autor: {props.autor}</p>
            <p className='comment'>Comentarios: {props.comments}</p>
            <Button bsStyle="info" href={props.link} target="_blank">Leer más</Button>
            <Button href={props.comment} target="_blank">Ver comentarios</Button>
        </Thumbnail>
      </Col>
)}

Noticia.PropTypes = {
  titulo: PT.string.isRequired,
  img:    PT.string.isRequired,
  autor:  PT.string.isRequired,
  texto:  PT.string.isRequired,
  link:   PT.string.isRequired
};

export default Noticia
