import React, { Component, PropTypes as PT } from 'react'
import Texto from '../texto'
import Titulo from '../titulo'

const Noticia = props => {

  return(
    <div className='flex-noticia'>
      <div className='contenido'>
        <img src={props.img}/>
        <div ClassName='info'>
          <Titulo tituloNoticia={props.titulo}></Titulo>
          <Texto descripcion={props.texto}></Texto>
          <p className='autor'>Autor: {props.autor}</p>
          <p className='comment'>Comentarios: {props.comments}</p>
          <div className='button'>
            <a className='base mas' href={props.link} target="_blank">Leer más</a>
            <a className='base ver' href={props.comment} target="_blank">Ver comentarios</a>
          </div>
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
