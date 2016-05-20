import React from 'react'
import { render } from 'react-dom'
import Pagina from './pagina'

const url = "https://www.reddit.com/r/reactjs.json"

render(
  <Pagina dir={url}></Pagina>,
  document.getElementById('container')
)
