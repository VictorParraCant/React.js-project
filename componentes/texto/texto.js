import React, { Component, PropTypes as PT } from 'react'

class Texto extends Component {

  constructor(props){
    super(props)
  }

  static PropTypes = {
    descripcion:  PT.string,
    maxlimit: PT.number
  }

  static defaultProps = {
    descripcion: 'Lo sentimos, en estos momentos no existe una descripción de la noticia.',
    maxlimit: 170
  }

  recortaTexto(descripcion){
    if(descripcion === null) {
      return 'Lo sentimos, en estos momentos no existe una descripción de la noticia.'
    } else {
      return (descripcion.length > this.props.maxlimit) ?
        ((descripcion.substring(0,this.props.maxlimit-3)) + '...') : descripcion
    }
  }

  render() {
    return(
      <p>
        { ::this.recortaTexto(this.props.descripcion) }
      </p>
    )
  }
}

export default Texto
