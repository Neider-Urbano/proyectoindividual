import React, {useState} from 'react'
import SelectFiltrarOption from "./SelectFiltrarOption"
import "../../../../styles/Components/Main/SeleccionarFiltrar.css"

const SelectFiltrar = ({razas, onChangeFiltros}) => {
    const [optionFiltrado, setOptioFiltrado]=useState("")    // const ====> enviar como props

    const onChangeFiltrar=(value)=>{                         // function ===> cambio en select de filtrar raza
        if(value!="Seleccione"){
            setOptioFiltrado(value)
        }
    }

    return (
        <div className="divSeleccionarFiltrar">
            <select className="selectTemRazas" defaultValue="seleccione"
                onChange={(e)=>{
                    onChangeFiltrar(e.target.value)
            }}>
                <option value="seleccione" disabled>Seleccione</option>
                <option value="filtrarTemperamentos">Temperamentos</option>
                <option value="filtrarRazas">Razas</option>
                <option value="Ninguno">Ninguno</option>
            </select>
            <SelectFiltrarOption optionFiltrado={optionFiltrado} 
                razas={razas} onChangeFiltros={onChangeFiltros}
            />
        </div>
  )
}

export default SelectFiltrar