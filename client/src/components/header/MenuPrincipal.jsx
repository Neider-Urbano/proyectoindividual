import React, {useEffect, useState} from 'react'
import {Link} from "react-router-dom"
import "../../styles/Components/Nav/MenuPrincipal.css"
import iconoHome from "../../images/icons/casa.png"
import iconoCrear from "../../images/icons/crear.png"

const MenuPrincipal = () => {
  var [pathname,setPathname]=useState(window.location.pathname);
  var opcionesMenu;

  useEffect(()=>{
    opcionesMenu=document.querySelectorAll(".opcionMenuPrincipal");
    borrarActiveOpcion();
    var posicion=-Infinity;
    if(pathname==="/dogs"){
      posicion=0;
    }else if(pathname==="/dog/crear"){
      posicion=1;
    }else{posicion=0}
    opcionesMenu[posicion].classList.add("active")
  },[pathname])

  const borrarActiveOpcion=()=>{
    opcionesMenu.forEach((opcion)=>{
      opcion.classList.remove("active")
    })
  }

  return (
    <div className="divMenuPrincipal">
        <Link className="LinkRouter" to="/dogs" 
            onClick={()=>{setPathname("/dogs")}}
        >
            <img src={iconoHome} alt="" className="iconoMenuPrincipal"/>
            <p className="opcionMenuPrincipal active" >Home</p>
        </Link>

        <Link className="LinkRouter" to="/dog/crear" 
            onClick={()=>{setPathname("/dog/crear")}}
        >
            <img src={iconoCrear} alt="" className="iconoMenuPrincipal"/>
           <p className="opcionMenuPrincipal">Crear</p>
        </Link>
    </div>
  )
}

export default MenuPrincipal