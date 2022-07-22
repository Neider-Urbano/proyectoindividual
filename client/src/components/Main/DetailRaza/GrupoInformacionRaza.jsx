import React from 'react'

const GrupoInformacionRaza = ({tituloPDetalle,pDetalles}) => {
  return (
    <div>
      <p className="pTituloDetalles">{tituloPDetalle}</p>
      <p className={tituloPDetalle==="Temperamentos" ? "pDetalles pParametros" : "pDetalles"}>{pDetalles}</p>
    </div>
  )
}

export default GrupoInformacionRaza