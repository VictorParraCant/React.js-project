import React, { Component, PropTypes as PT } from 'react'

class Titulo extends Component {

  constructor(props){
    super(props)
  }

  static PropTypes = {
    tituloNoticia:  PT.string,
    maxlimit: PT.number
  }

  static defaultProps = {
    tituloNoticia: 'Cargando titulo...',
    maxlimit: 60
  }

  recortaTexto(tituloNoticia){
    if(tituloNoticia === null) {
      return 'Cargando titulo...'
    } else {
      return (tituloNoticia.length > this.props.maxlimit) ?
        ((tituloNoticia.substring(0,this.props.maxlimit-3)) + '...') : tituloNoticia
    }
  }

  render() {
    return(
      <h3>
        { ::this.recortaTexto(this.props.tituloNoticia) }
      </h3>
    )
  }
}

export default Titulo
