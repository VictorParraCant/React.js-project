import React, {Component} from 'react';

class Noticia extends Component {

  // Props por defecto
  render(){
    return(
      <div>
        <h1>{this.props.titulo}</h1>
        <p>{this.props.noticia}</p>
      </div>
    );
  }

}

class App extends React.Component {

  crearNoticas(x) {
    return x.map((noticia, idx) => <Noticia key={idx} titulo={noticia.titulo} noticia={noticia.noticia} />);
  }

  render() {

    let rows = this.crearNoticas(this.props.perico);

    return(
      <div>
        {rows}
      </div>
    )

  }

}

export default App
