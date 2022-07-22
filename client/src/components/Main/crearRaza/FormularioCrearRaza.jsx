import React from 'react'
import DivGrupoTemp from './DivGrupoTemp'
import {nanoid} from "nanoid";
import "../../../styles/Components/Main/FormularioCrearRaza.css"
import DivGrupoInputs from './DivGrupoInputs';

const FormularioCrearRaza = (props) => {
    const {datosRaza,errores,onChangeDatosRaza,cancelarTemperamento,
        temperamentosSelect,temperaments,onChangeTemperamentos}=props;
    return (
        <div className="divCamposCrearRaza">
            <div className="divGrupoInputs">
              <span>Name</span>
              <input type="text" placeholder="Nombre" name="name" className={errores.name && "error"}
                      value={datosRaza.name} onChange={(e)=>{onChangeDatosRaza(e);}}/>
            </div>
            <DivGrupoInputs 
              titleSpan="Altura Imperial (rango)"            placeholderInput="(cm)" 
              nameInputRango1="heightImperialMin"            errorInputRango1={errores.heightImperialMin} 
              valueInputRango1={datosRaza.heightImperialMin} onChangeDatosRaza={onChangeDatosRaza} 
              nameInputRango2="heightImperialMax"            errorInputRango2={errores.heightImperialMax} 
              valueInputRango2={datosRaza.heightImperialMax}
            />
            <DivGrupoInputs 
              titleSpan="Altura Metric (rango)"              placeholderInput="(cm)" 
              nameInputRango1="heightMetricMin"              errorInputRango1={errores.heightMetricMin} 
              valueInputRango1={datosRaza.heightMetricMin}   onChangeDatosRaza={onChangeDatosRaza} 
              nameInputRango2="heightMetricMax"              errorInputRango2={errores.heightMetricMax} 
              valueInputRango2={datosRaza.heightMetricMax}
            />
            <DivGrupoInputs 
              titleSpan="Peso Imperial (rango)" 
              placeholderInput="(Kg)"                         nameInputRango1="weightImperialMin" 
              errorInputRango1={errores.weightImperialMin}    valueInputRango1={datosRaza.weightImperialMin} 
              onChangeDatosRaza={onChangeDatosRaza}           nameInputRango2="weightImperialMax" 
              errorInputRango2={errores.weightImperialMax}    valueInputRango2={datosRaza.weightImperialMax}
            />
            <DivGrupoInputs 
              titleSpan="Peso Metric (rango)" 
              placeholderInput="(Kg)"                        nameInputRango1="weightMetricMin" 
              errorInputRango1={errores.weightMetricMin}     valueInputRango1={datosRaza.weightMetricMin} 
              onChangeDatosRaza={onChangeDatosRaza}          nameInputRango2="weightMetricMax" 
              errorInputRango2={errores.weightMetricMax}     valueInputRango2={datosRaza.weightMetricMax}
            />
            <div className="divGrupoInputs">
              <span>Seleccionar temperamento(s)</span>
                <select defaultValue="seleccione" 
                  onChange={(e)=>{onChangeTemperamentos(e)}} name="temperaments">
                    <option value="seleccione">Seleccione</option>
                    {temperaments[0] && temperaments.map((temp)=>{
                      return <option value={temp.name} key={nanoid()}>{temp.name}</option>
                    })}
                </select>
            </div>
            <div className="divGrupoInputs">
              <span>Temperamento(s)</span>
              <div className="divGrupoTemperamentos">
                {temperamentosSelect.length>0 && 
                  temperamentosSelect.map(temperamento=>{
                    return <DivGrupoTemp temperamento={temperamento} key={nanoid()}
                            cancelarTemperamento={cancelarTemperamento}
                          />
                  })
                }
              </div>
            </div>
            <div className="divGrupoInputs">
              <span>Años de vida (rango)</span>
              <div className="divRangos">
                <input type="number" name="life_spanMin"
                  value={datosRaza.life_spanMin} onChange={(e)=>{onChangeDatosRaza(e);
                }}/>
                <label>-</label>
                <input type="number" name="life_spanMax" className={errores.life_spanMax && "error"}
                  value={datosRaza.life_spanMax} onChange={(e)=>datosRaza.life_spanMin && onChangeDatosRaza(e)
                }/>  
              </div>
            </div>
          </div>
  )
}

export default FormularioCrearRaza