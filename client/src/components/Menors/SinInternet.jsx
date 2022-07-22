import React from 'react'
import iconoSinInternet from "../../images/icons/perroTriste.png"; 
import "../../styles/Components/Main/SinInternet.css"

const SinInternet = () => {

  return (
    <div className="divSinInternet">
        <img src={iconoSinInternet} alt=""/>
        <div>
            <h1>¡Señor usuario!</h1>
            <p>Verifique su conexión a Internet</p>
        </div>
    </div>
  )
}

export default SinInternet