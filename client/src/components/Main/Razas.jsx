import React, {useEffect, useState} from 'react'
import { connect } from 'react-redux' 
import {nanoid} from "nanoid"

import Pagination from './Razas/filtrarOrdenar/Pagination'
import SelectFiltrar from './Razas/filtrarOrdenar/SelectFiltrar'
import SelectOrdenar from './Razas/filtrarOrdenar/SelectOrdenar'
import TarjetaRaza from './Razas/TarjetaRaza'
import AlertDogs from '../Menors/AlertDogs'
import Loading from '../Menors/Loading'
import BusquedaNombreRaza from './Razas/BusquedaNombreRaza'
import SinInternet from '../Menors/SinInternet'

import "../../styles/Components/Main/Razas.css"
import {getRazas,getRazasName} from "../../redux/actions"
import { functionBubleSortRazas } from '../../utils/functionsRazas/funcionOrdenarRazas'
import { functionFiltrarRazas } from '../../utils/functionsRazas/functionFiltrarRazas'

const Razas = ({razas,getRazas, getRazasName, exitoAndError}) => {
  const [trueInternet,setTrueInternet]=useState(true);
  const [operacionAxios,setOperacionAxios]=useState("getRazas");
  const [razasRedux, setRazasRedux]=useState([])
  const [pagina,setPagina]=useState(1)
  const [porPagina,setPorPagina]=useState(8)
  const [maximo,setMaximo]=useState(0)
  const [trueAlert, setTrueAlert]=useState(null)
  const [contadorTrue,setContadorTrue]=useState(null)
  const [valueBuscarRaza,setValueBuscarRaza]=useState("") 
  const [informationAlert, setInformationAlert]=useState({
    tipoAlerta:"", 
    mensajeAlerta:""
  }) 

  useEffect(()=>{
    if(!navigator.onLine){setTrueInternet(false)}else{
        if((operacionAxios==="getRazas" && contadorTrue<4)){
          if(contadorTrue<2){getRazas();} setContadorTrue(contadorTrue+1)
        }
        if(operacionAxios==="getNameRazas"  && contadorTrue<4){
          if(contadorTrue<3){getRazasName(valueBuscarRaza)} setContadorTrue(contadorTrue+1)
        }
        if(operacionAxios!==null && contadorTrue>3){
          setTimeout(()=>{ setOperacionAxios(null)},1000) 
        }
        if((operacionAxios===null && contadorTrue!==0) || operacionAxios==="filtrarRazasNinguno"){
          setTimeout(() => {
            setContadorTrue(0);
            setRazasRedux(razas);
            if(!razas[0]){
              exitoAndError[0]={error:"Fallo la conexion a la base de datos",paginaPeticion:"paginaDogs"}
            }
            if(exitoAndError[0] && exitoAndError[0].error && exitoAndError[0].paginaPeticion==="paginaDogs"){
              setTrueAlert(true);
              setInformationAlert({
                tipoAlerta:"error", 
                mensajeAlerta: exitoAndError[0].error,
              })
            }
          }, 1500);
          setTimeout(()=>{setMaximo(razas.length/porPagina)},1800) 
        }
        if(operacionAxios==="filtrarRazas"){
          setMaximo(razasRedux.length/porPagina) 
        }
    }
  },[razas,operacionAxios, contadorTrue])
  
  const opcionOrdenarRazas=async(opcion)=>{
    const arrayRazasOrdenadas=functionBubleSortRazas(razasRedux,opcion) //Utils
    setOperacionAxios(opcion)
    setRazasRedux(arrayRazasOrdenadas)
  };
  const busquedaNombreRaza=(value)=>{
    if(value.length>2 || value===""){
      setValueBuscarRaza(value)
      setOperacionAxios("getNameRazas")
    }else{
      setInformationAlert({
        tipoAlerta:"information", 
        mensajeAlerta: "El valor a buscar debe contener mas de dos caracteres",
      })
      setTrueAlert(true)
    }
  };
  const onChangeFiltros=(valueSelect, valueFiltro)=>{ 
    functionFiltrarRazas(valueSelect,valueFiltro,razas,setRazasRedux,setOperacionAxios)    //Utils
  }
  function optionClickAlerta(valueClick){ // function --> AlertDogs = (Click)
    if(valueClick){
      setTrueAlert(false)
    }
  }
  return(
    <div className="divMainRazas">
      {trueInternet===false ? <SinInternet />: <>
        {!razasRedux[0] && contadorTrue!==0 && <Loading />}
        {razasRedux[0] && <>
          <div className="divOpcionesFiltrarOrdenar">
            <SelectFiltrar razas={razas} onChangeFiltros={onChangeFiltros}/>
            <SelectOrdenar opcionOrdenarRazas={opcionOrdenarRazas}/>
            <BusquedaNombreRaza busquedaNombreRaza={busquedaNombreRaza}/>
          </div>
          <div className="divRazas">
            {razas[0] && contadorTrue===0 && razasRedux
                    .slice((pagina-1)*porPagina, (pagina-1)*porPagina+porPagina)
                    .map((raza)=>{
                      return  <TarjetaRaza raza={raza} key={nanoid()}/>
              })} {contadorTrue!==0 && <Loading />}
          </div>
          <div className="divPagination">
              {razasRedux[0] &&
                <Pagination pagina={pagina} setPagina={setPagina} 
                          maximo={maximo} cantidadRazas={razasRedux.length}/>
              }  
          </div>
          </>
        }
        {exitoAndError.length>0 && trueAlert===true && <AlertDogs informationAlert={informationAlert} 
                                     optionClickAlerta={optionClickAlerta} buttonVolver={false}/>}
        </>
      }
    </div>
  );
}

const mapStateToProps=(state)=>{
  return{ razas:state.razas,
          exitoAndError:state.exitoAndError
  }
};function mapDispatchToProps(dispatch){
    return{ getRazas: async()=>{await dispatch(getRazas())},
            getRazasName: async(name)=>{await dispatch(getRazasName(name))},
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Razas)