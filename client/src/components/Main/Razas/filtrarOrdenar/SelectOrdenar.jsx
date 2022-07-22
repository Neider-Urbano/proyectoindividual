import React from 'react'
import "../../../../styles/Components/Main/SelectOrdenar.css"

const SelectOrdenar = ({opcionOrdenarRazas}) => {
  return (
    <select defaultValue="seleccione" className="selectOrdenar" 
      onChange={(e)=>{
        opcionOrdenarRazas(e.target.value)                           //props
      }}>
        <option value="seleccione" disabled>Seleccione</option>
        <option value="ordenAZ" >A-Z</option>
        <option value="ordenZA" >Z-A</option>
        <option value="ordenPesoMaxMinMetric">PesoMax-Min Metric</option>
        <option value="ordenPesoMinMaxMetric">PesoMin-Max Metric</option>
        <option value="ordenPesoMaxMinImperial">PesoMax-Min Imperial</option>
        <option value="ordenPesoMinMaxImperial">PesoMin-Max Imperial</option>
    </select>
  )
}

export default SelectOrdenar