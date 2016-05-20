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
    let linkin = "https://www.reddit.com"
    let nuevosDatos = []
    miDato.data.data.children.map( x => {
      nuevosDatos.push(
        {
          "titulo": x.data.title,
          "texto": x.data.selftext,
          "img": x.data.thumbnail,
          "link": linkin+x.data.permalink
        }
      )
    })
    this.setState({datos: nuevosDatos})
  }

  render(){
    let noticias = ( this.state.datos.length === 0 ) ? <p>Cargando... </p> :
    this.state.datos.map( noticia =>
      <Noticia titulo={noticia.titulo} texto={noticia.texto} img={noticia.img} link={noticia.link}/> )

    return(
      <div>
        <Menu></Menu>
        <Grid>
          <Row className="show-grid">
            <Col xs={12} md={12}>
              {noticias}
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Pagina
