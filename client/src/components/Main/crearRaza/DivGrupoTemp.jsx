import React from 'react'
import "../../../styles/Components/Main/DivGrupoTemp.css"
const DivGrupoTemp = ({temperamento,cancelarTemperamento}) => {
    return (
        <div className="divTemp">
            <p>{temperamento}</p>
            <p className="pCancelarTemp" 
                onClick={()=>{
                    cancelarTemperamento(temperamento)
            }}>x</p>
        </div>
  )
}

export default DivGrupoTemp