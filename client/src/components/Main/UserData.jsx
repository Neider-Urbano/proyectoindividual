import React, {useEffect, useState} from 'react'
import "../../styles/Components/Main/EditarUser.css"
import avatar1 from "../../images/icons/avatar1.png";
import avatar2 from "../../images/icons/avatar2.png";
import avatar3 from "../../images/icons/avatar3.png";
import avatar4 from "../../images/icons/avatar4.png";

const UserData = () => {
  const localStore=window.localStorage;
  const localStoreNameUser=localStore.getItem("nameUser")
  const localStoreTelefonoUser=localStore.getItem("telefonoUser")
  const localStorePaisUser=localStore.getItem("paisUser")
  const localStoreAvatarUser=localStore.getItem("avatarUser")
  const radioAvatar=document.getElementsByName("avarRadio")
  const [contador,setContador]=useState(0)
  const [errors,setErrors]=useState({errorNameUser:null})
  const [datosUser,setDatosUser]=useState({
    nameUser:localStoreNameUser, 
    telefonoUser: localStoreTelefonoUser,
    paisUser: localStorePaisUser,
    avatarUser:localStoreAvatarUser
  })
  useEffect(()=>{
    radioAvatar.forEach((radio)=>{
      if(radio.value===localStoreAvatarUser && contador===0){
        radio.checked=true;
      };
      radio.addEventListener('click',(e)=>{
        setDatosUser((state)=>({...state,avatarUser: e.target.value}))
      })
    })
    setContador(1);
  })
  const onChangeNameUser=(e)=>{
    const {value}=e.target;
    setDatosUser((state)=>({...state,nameUser:e.target.value}))
    setErrors({
      errorNameUser:validarUserName(value)
    })
  }
  const validarUserName=(valueInput)=>{
    let error="";
    if(valueInput.length<10 && valueInput!==""){
      error="Minimo 10 caracteres";
    }
    if(valueInput.length>15){
      error="Máximo 15 caracteres";
    }
    return error
  }
  return (
    <div className='divUserData'>
        <div className="divDetallesData">
            <p className="tituloDetallesUser">Detalles de Usuario</p>
            <label>Nombre</label>
              <input type="text" value={datosUser.nameUser}
              className={errors.errorNameUser!=="" && errors.errorNameUser!==null ? "error" : ""}  
                onChange={(e)=>{
                  onChangeNameUser(e)
                }}
              />
            <label>Telefono</label>
              <input type="number" value={datosUser.telefonoUser!=="null" ? datosUser.telefonoUser : ""}
                onChange={(e)=>{
                  setDatosUser((state)=>({...state,telefonoUser:e.target.value}))
                }}
              />
            <label>Pais</label>
              <input type="text" value={datosUser.paisUser!=="null" ? datosUser.paisUser : ""}
                onChange={(e)=>{
                  setDatosUser((state)=>({...state,paisUser:e.target.value}))
                }}
              />
            <div className="divAvatars">
              <label>Elige tu Avatar</label>
                <div className="divImgAvatar">
                  <img src={avatar1} alt="" />
                  <input type="radio" name="avarRadio" value="avatar1"/>
                </div>
                <div className="divImgAvatar">
                  <img src={avatar2} alt="" />
                  <input type="radio" name="avarRadio" value="avatar2"/>
                </div>
                <div className="divImgAvatar">
                  <img src={avatar3} alt="" />
                  <input type="radio" name="avarRadio" value="avatar3"/>
                </div>
                <div className="divImgAvatar">
                  <img src={avatar4} alt="" />
                  <input type="radio" name="avarRadio" value="avatar4"/>
                </div>
            </div>
            <input type="button" value="Aceptar" className="inputAceptar"
              onClick={()=>{
                if(errors.errorNameUser==="" || errors.errorNameUser===null){
                  if(datosUser.avatarUser===""){datosUser.avatarUser="avatarDefault"}
                  if(datosUser.nameUser===""){datosUser.nameUser="nombreUsuario";}
                  localStore.clear();
                  localStore.setItem('nameUser', datosUser.nameUser);
                  localStore.setItem('telefonoUser', datosUser.telefonoUser);
                  localStore.setItem('paisUser', datosUser.paisUser);
                  localStore.setItem('avatarUser', datosUser.avatarUser);
                  window.location.reload(true)
                }
              }}
            />
        </div>
    </div>
  )
}

export default UserData