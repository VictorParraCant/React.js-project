import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const data = [
    {
      "titulo":"titulo1",
      "noticia":"noticia1"
    },
    {
      "titulo":"titulo2",
      "noticia":"noticia2"
    },
    {
      "titulo":"titulo3",
      "noticia":"noticia3"
    }
];

ReactDOM.render(<App perico={data} />, document.getElementById('app'))
