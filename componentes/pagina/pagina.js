import React, { Component, PropTypes as PT } from 'react'
import {Grid, Row, Col, Clearfix} from 'react-bootstrap'
import Menu from "../menu"
import Noticia from "../noticia"
import Request from "axios"

class Pagina extends Component {

  static PropTypes = {
    dir: PT.string,
  }
  static defaultProps = {
    dir: "https://www.reddit.com/r/reactjs.json",
  }

  constructor() {
    super();
    this.state = {
      datos: []
    }
  }

  componentDidMount() {
    Request.get(this.props.dir)
      .then( response => ::this.parser(response) )
  }

  parser(miDato) {
    //console.log(miDato.data);
    let nuevosDatos = []
    let logo = "https://facebook.github.io/react/img/logo.svg"
    var regex = new RegExp('(.*?)\.(jpg)$');
    miDato.data.data.children.map( x => {
      let text = (x.data.selftext === "") ? null : x.data.selftext
      let img = regex.test(x.data.thumbnail) ? x.data.thumbnail : logo
      nuevosDatos.push(
        {
          "titulo": x.data.title,
          "texto": text,
          "img": img,
          "link": x.data.url
        }
      )
    })
    this.setState({datos: nuevosDatos})
  }

  render(){
    let noticias = ( this.state.datos.length === 0 ) ? <p>Cargando... </p> :
    this.state.datos.map( (noticia,idx) =>
      <Noticia key={idx} titulo={noticia.titulo} texto={noticia.texto} img={noticia.img} link={noticia.link}/> )
    return(
      <div>
        <Menu></Menu>
        <Grid>
          <Row className="show-grid">
            <div id="Flex">
              {noticias}
            </div>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Pagina
