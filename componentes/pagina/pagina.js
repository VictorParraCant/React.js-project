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
    console.log(miDato.data);
    let nuevosDatos = []
    let logo = "https://facebook.github.io/react/img/logo.svg"
    var regex = new RegExp('(.*?)\.(jpg)$');
    miDato.data.data.children.map( x => {
      let comment = "https://www.reddit.com"+x.data.permalink
      let text = (x.data.selftext === "") ? null : x.data.selftext
      let img = regex.test(x.data.thumbnail) ? x.data.thumbnail : logo
      nuevosDatos.push(
        {
          "img": img,
          "titulo": x.data.title,
          "texto": text,
          "autor": x.data.author,
          "comments": x.data.num_comments,
          "link": x.data.url,
          "comment": comment
        }
      )
    })
    this.setState({datos: nuevosDatos})
  }

  render(){
    let noticias = ( this.state.datos.length === 0 ) ? <p>Cargando... </p> :
    this.state.datos.map( (noticia,idx) =>
      <Noticia key={idx}
        img={noticia.img}
        titulo={noticia.titulo}
        texto={noticia.texto}
        autor={noticia.autor}
        comments={noticia.comments}
        link={noticia.link}
        comment={noticia.comment}/> )

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
