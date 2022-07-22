import React,{useEffect, useState} from 'react'
import MenuPrincipal from "./MenuPrincipal"
import CuentaUsuario from "./CuentaUsuario"
import {Link} from "react-router-dom"
import "../../styles/Components/Nav/Nav.css"
import { connect } from 'react-redux'

const Nav = ({razas}) => {
  const [activarPhoneMenu,setActivarPhoneMenu]=useState(true);

  return (
    <div className={activarPhoneMenu===true ? "navPrincipal" : "navPrincipal navPrincipalActivo"}>
        <Link to="/" className="LinkRouter">
            <p className="pKiraMax">Kira&Max</p>
        </Link>
        <MenuPrincipal razas={razas}/>
        <CuentaUsuario />
        <div className={activarPhoneMenu===true ? "phoneIconMenu" : "phoneIconMenuCerrar"}
          onClick={()=>{setActivarPhoneMenu(!activarPhoneMenu)}}
        ></div>
    </div>
  )
}

const mapStateToProps=(state)=>{
  return{
    razas:state.razas
  }
}
function mapDispatchToProps(dispatch){
  return{
  }
}
export default 
            connect(mapStateToProps,mapDispatchToProps)( Nav)