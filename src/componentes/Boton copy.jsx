import React from "react";
import '../hojas-de-estilos/Boton copy.css'
function BotonCoppy ({texto, esBotonClic, manejadorClic}) {

  return(
    <div>
      <button
      className={esBotonClic ? 'boton-clic': 'boton-reiniciar'}
      onClick={manejadorClic}
      >
        {texto}
      </button>
    </div>
  )
}

export default BotonCoppy;