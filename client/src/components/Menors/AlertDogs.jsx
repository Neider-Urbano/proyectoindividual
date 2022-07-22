import React, {useEffect, useState} from 'react'
import "../../styles/Alert/Alert.css"
import iconoExito from "../../images/icons/perroFeliz.png"
import iconoError from "../../images/icons/iconoTriste.png"
import iconoInformacion from "../../images/icons/detalleRaza.png"

const AlertDogs = ({informationAlert, optionClickAlerta, buttonVolver}) => {
    var {tipoAlerta, mensajeAlerta}=informationAlert;
    var [divImgAlerta, setDivImgAlerta]=useState("divImgAlerta")
    var [imgAlerta, setImgAlerta]=useState(null);
    var [tituloAlerta,setTituloAlerta]=useState("");
    useEffect(()=>{
        if(tipoAlerta==="error"){
            setDivImgAlerta("divImgAlerta backgroundError")
            setImgAlerta(iconoError)
            setTituloAlerta("¡Error!")
        }else if(tipoAlerta==="exito"){
            setDivImgAlerta("divImgAlerta backgroundExito")
            setImgAlerta(iconoExito)
            setTituloAlerta("¡Perfecto!")
        }else{
            setDivImgAlerta("divImgAlerta backgroundInformacion")
            setImgAlerta(iconoInformacion)
            setTituloAlerta("¡Ups!")
        }
    })
  return (
    <div className="bodyAlert">
        <div className="divAlert">
            <div className={divImgAlerta}>
                <img src={imgAlerta} alt=""/>
            </div>
            <div className="divInformacionAlert">
                <h1>{tituloAlerta}</h1>
                <p className="pDetalleAlert">{mensajeAlerta}</p>
                <div className="divOpcionesAlert">
                    <button className="buttonOk" onClick={()=>{optionClickAlerta("Ok")}}>Ok</button>
                    {buttonVolver && 
                        <button className="buttonVolver" onClick={()=>{optionClickAlerta("Volver")}}>Volver</button>
                    }
                </div>
                <div className="divCerrarAlerta">  
                    <p onClick={()=>{optionClickAlerta("cerrar")}}>X</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default AlertDogs