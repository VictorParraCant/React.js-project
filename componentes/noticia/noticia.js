import React, { Component, PropTypes as PT } from 'react'
import { Media, Button } from 'react-bootstrap'

const Noticia = props => (
    <Media>
        <Media.Left>
          <img width={120} height={120} src={props.img} alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{props.titulo}</Media.Heading>
          <p>{props.texto}</p>
          <Button href={props.link}>Leer más</Button>
        </Media.Body>
    </Media>
)

Noticia.PropTypes = {
  titulo: PT.string.isRequired,
  texto:  PT.string,
  img:    PT.string,
  link:   PT.string.isRequired
};

Noticia.defaultProps = {
    texto:  'No existe descripcion en estos momentos...',
    img:    'https://facebook.github.io/react/img/logo.svg'
}

export default Noticia
