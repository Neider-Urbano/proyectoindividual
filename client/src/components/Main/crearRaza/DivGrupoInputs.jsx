import React from 'react'

const DivGrupoInputs = ({titleSpan, placeholderInput, nameInputRango1, errorInputRango1, valueInputRango1, onChangeDatosRaza, nameInputRango2, errorInputRango2, valueInputRango2}) => {
  return (
    <div className="divGrupoInputs">
        <span>{titleSpan}</span>
        <div className="divRangos">
            <input type="number" placeholder={placeholderInput} name={nameInputRango1} 
                className={errorInputRango1 && "error"}
                value={valueInputRango1} onChange={(e)=>{onChangeDatosRaza(e);
            }}/>
            <label>-</label>
            <input type="number" placeholder={placeholderInput} name={nameInputRango2} 
                className={errorInputRango2 && "error"}
                value={valueInputRango2} onChange={(e)=>{valueInputRango1!=="" && 
                onChangeDatosRaza(e);
            }}/>
        </div>
    </div>
  )
}

export default DivGrupoInputs