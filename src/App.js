import './App.css';
import Boton from './componentes/Boton.jsx'
import freeCodeCampoLogo from './img/fcc_primary_large.jpg'
import Contador from './componentes/Contador.jsx';
import React from 'react';

class App extends React.Component{
  constructor(){
    super()
    this.state = {
      numClics:0
    }
    //El tutuorial mencionaba que las siguientes lineas eran necesarias para asocial el significado actual
    //con el significado de "this" en los metodos, sin embargo funciona sin estas lineas, es posible que tenga que ver con un tema de version de React
    this.manejarClic = this.manejarClic.bind(this); 
    this.reiniciarContador = this.reiniciarContador.bind(this);
  }

  manejarClic () {

    this.setState( ({ numClics }) => ({numClics: numClics + 1}))
    // this.setState(this.state.numClics + 1) //En lugar de la linea anterior puedes usar esta linea.
  }
  reiniciarContador(){
    this.setState( {numClics: 0})
  };

  render(){
    return (
      <div className="App">
        <div className='freecodecamp-logo-contenedor'>
          <img 
            className='freecodecamp-logo'
            src={freeCodeCampoLogo} 
            alt='Logo de freeCodeCamp'
          />
        </div>
        <div className='contenedor-principal'>
          <Contador numClics={this.state.numClics} />       
  
          <Boton texto='Clic' 
          esBotonClic={true} 
          manejarClic={this.manejarClic}/>
  
          <Boton texto='Reiniciar'   
          esBotonClic={false} 
          manejarClic={this.reiniciarContador} />
        </div>
      </div>
    );
  }
}

// function App() {
//   const [numClics, setNumClics] = useState(0)

//     useEffect(()=>{console.log("Se inicio el contador por primera vez")},[numClics])
  
// }

export default App;
