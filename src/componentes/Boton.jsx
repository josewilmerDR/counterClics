import React from "react";
import '../hojas-de-estilos/Boton.css'
// import cssBoton from '../hojas-de-estilos/Boton.css'


class Boton extends React.Component{
  render(){
    return(
      <>
        <button 
        className={this.props.esBotonClic ? 'boton-clic': 'boton-reiniciar'}
        onClick={this.props.manejarClic}
        >
          {this.props.texto}
        </button>    
      </>
    )
  }
}

export default Boton;