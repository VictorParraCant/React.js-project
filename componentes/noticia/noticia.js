import React, { Component, PropTypes as PT } from 'react'
import Texto from '../texto'
import Titulo from '../titulo'

const Noticia = props => {

  return(
    <div className="flex">
      <div className='flex-noticia'>
        <img src={props.img}/>
        <Titulo tituloNoticia={props.titulo}></Titulo>
        <Texto descripcion={props.texto}></Texto>
        <p className='autor'>Autor: {props.autor}</p>
        <p className='comment'>Comentarios: {props.comments}</p>
        <div className='button'>
          <a  className='mas' href={props.link} target="_blank">Leer más</a>
          <a  className='ver' href={props.comment} target="_blank">Ver comentarios</a>
        </div>
      </div>
    </div>
)}

Noticia.PropTypes = {
  titulo: PT.string.isRequired,
  img:    PT.string.isRequired,
  autor:  PT.string.isRequired,
  texto:  PT.string.isRequired,
  link:   PT.string.isRequired
};

export default Noticia
