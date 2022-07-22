import React from 'react'
import {Link} from "react-router-dom"
import "../../styles/Components/Nav/CuentaUsuario.css"
import logoUser from "../../images/icons/user.png"
import avatar1 from "../../images/icons/avatar1.png"
import avatar2 from "../../images/icons/avatar2.png"
import avatar3 from "../../images/icons/avatar3.png"
import avatar4 from "../../images/icons/avatar4.png"
import imgConfiguracion from "../../images/icons/editar.png"

const CuentaUsuario = () => {
  const localUserName=window.localStorage;
  const nameUser=localUserName.getItem("nameUser");
  const avatarUser=localUserName.getItem("avatarUser");

  const clickCerrarSesion=()=>{
    localUserName.clear();
    window.location="/"
  }

  return (
    <div className="divCuentaUsuario">
        <div className="divOpcionesCuentaUser">
          <p className="pUserName">
            {nameUser}
          </p>
          <Link to="/" className="LinkRouter"
            onClick={()=>{
              clickCerrarSesion()
            }}
          >
            <p className="pCerrarSesion">cerrar sesión</p>
          </Link>
        </div>
        <div className="divEditar">
          <Link to="/user"><img src={imgConfiguracion} alt=""/></Link>
        </div>
        <div className="divImgLogoUser">
          <img src={
              avatarUser==="avatarDefault" ? 
              logoUser : avatarUser==="avatar1" ? 
              avatar1 : avatarUser==="avatar2" ?
              avatar2 : avatarUser==="avatar3" ?
              avatar3 : avatar4
          } alt=""/>
        </div>
    </div>
  )
}

export default CuentaUsuario