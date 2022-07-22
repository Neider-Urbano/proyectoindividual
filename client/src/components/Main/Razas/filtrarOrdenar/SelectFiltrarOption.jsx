import React, {useEffect, useState} from 'react'
import "../../../../styles/Components/Main/SelectFiltrarOption.css"
import { getTemperamentos } from '../../../../redux/actions'
import { connect } from 'react-redux'
import {nanoid} from "nanoid"

const SelectFiltrarOption = ({optionFiltrado, getTemperamentos, temperaments, razas, onChangeFiltros}) => {
  const [valueSelect,setValueSelect]=useState("seleccione")

  useEffect(()=>{
    if(optionFiltrado==="filtrarTemperamentos"){
      getTemperamentos()
    }else if(optionFiltrado==="Ninguno"){                 // opcion = props
      onChangeFiltros("",optionFiltrado)                  // props pasado
    }
    setValueSelect("seleccione")
  },[optionFiltrado])

  const onChangeSelect=(valueSelect)=>{                   // function ==> cuando cambia el select
    setValueSelect(valueSelect)
    onChangeFiltros(valueSelect, optionFiltrado)          // props pasado
  }
  return (
    <div className="selecFiltrarOption">
        <select value={valueSelect}
            onChange={(e)=>{
              onChangeSelect(e.target.value)
            }}
          >
            <option value="seleccione" disabled>Seleccione</option>
            {optionFiltrado==="filtrarTemperamentos"
              && temperaments[0] && temperaments.map((temp)=>{
                return <option value={temp.name} key={nanoid()}>{temp.name}</option>
              })
            }
            {optionFiltrado==="filtrarRazas"
              && razas[0] && razas.map((raza)=>{
                return <option value={raza.name} key={nanoid()}>{raza.name}</option>
              })
            }
        </select>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    temperaments:state.temperaments
  }
}

function mapDispatchToProps(dispatch){
  return{
    getTemperamentos: async()=>{await dispatch(getTemperamentos())},
  }
}

export default 
            connect(
              mapStateToProps, 
              mapDispatchToProps)(SelectFiltrarOption)