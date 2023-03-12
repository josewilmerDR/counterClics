import React from "react";
import '../hojas-de-estilos/Contador copy.css'

function ContadorCoppy({numClics}){
  return(
    <div className="contador">
      {numClics}
    </div>
  )
}

export default ContadorCoppy;