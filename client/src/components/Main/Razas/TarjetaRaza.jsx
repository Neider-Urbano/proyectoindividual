import React from 'react'
import {Link} from "react-router-dom"
import "../../../styles/Components/Main/TarjetaRaza.css"

const TarjetaRaza = ({raza}) => {
  return (
      <div className="divTarjetaRaza">
        <div className="tarjeta-wrap">
          <div className="tarjeta">
            <div className="adelante">
              <img src={raza.image.url} alt=""/>
              <div className="divNameRaza">
                <p>{raza.name}</p>
              </div>
            </div>
            <div className="atras">  
              <Link to={`/dog/${raza.name}`} className="LinkRouter">
                <p className="pDetalles">DETALLES</p>
                <div>
                  <p><span>Nombre</span> {raza.name}</p>
                  <p><span>Temperamentos</span> {raza.temperament}</p>
                  <p><span>Peso Imperial</span> {raza.weight.imperial}</p>          
                  <p><span>Peso Metric</span> {raza.weight.metric}</p> 
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
  )
}

export default TarjetaRaza