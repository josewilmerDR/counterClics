import './App copy.css';
import React, { useEffect, useState } from 'react';
import freeCodeCompLogo from './img/fcc_primary_large.jpg'
import BotonCoppy from './componentes/Boton copy.jsx';
import ContadorCoppy from './componentes/Contador copy.jsx';

function AppCoppy() {
  const [numClics, setNumClics] = useState(0)
  const manejadorClic = () => {
    setNumClics(numClics + 1)
  }

  const reiniciarClic = () => {
    setNumClics(0)
  }
  useEffect(()=>{},[numClics])
  return (
    <div className="App">
      <div className='freecodecamp-logo-contenedor'>
        <img 
        className='freecodecamp-logo'
        src={freeCodeCompLogo}
        alt="" /> 
        </div>
      <div className='contenedor-principal'>
        <ContadorCoppy numClics={numClics}/>

        <BotonCoppy
        texto={"Click"}
        esBotonClic={true}
        manejadorClic={manejadorClic} />

        <BotonCoppy
        texto={"Reiniciar"}
        esBotonClic={false}
        manejadorClic={reiniciarClic} />
      </div>
      
    </div>
  );
}

export default AppCoppy;
