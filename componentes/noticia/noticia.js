import React, { Component, PropTypes as PT } from 'react'
import { Media, Button } from 'react-bootstrap'

class Noticia extends Component {

  static PropTypes = {
    titulo: React.PropTypes.string,
    texto:  React.PropTypes.string,
    img:    React.PropTypes.string
  };

  static defaultProps = {
    titulo: 'Titulazo',
    texto:  'Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed eiusmod tempor',
    img:    'https://lh3.googleusercontent.com/-0_Qt3elTTl0/AAAAAAAAAAI/AAAAAAAAAAA/ADhl2ypvSZrMm4D9LMBEru6J-jcziCbTqA/s32-c-mo/photo.jpg'
  };

  render(){
    return(
      <Media>
        <Media.Left>
          <img width={120} height={120} src={this.props.img} alt="Image"/>
        </Media.Left>
        <Media.Body>
          <Media.Heading>{this.props.titulo}</Media.Heading>
          <p>{this.props.texto}</p>
          <Button>Leer más</Button>
        </Media.Body>
      </Media>
    )
  }
}
export default Noticia
