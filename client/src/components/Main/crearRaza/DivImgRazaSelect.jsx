import React, { useEffect } from 'react'
import "../../../styles/Components/Main/DivImgSelect.css"

const DivImgRazaSelect = ({urlImg, setImgSelect, imgSelect}) => {
    var arrayImg=[
    "https://img.freepik.com/foto-gratis/closeup-retrato-lindo-perro-pastor-aleman-corriendo-sobre-hierba_181624-30360.jpg?size=626&ext=jpg&uid=R50194990&ga=GA1.2.1371446412.1647650461",
    "https://img.freepik.com/foto-gratis/adorable-bulldog-blanco-retrato-cachorro-banner-social_53876-148022.jpg?t=st=1658368661~exp=1658369261~hmac=676427bb48b3655fc143933af5acb3118a92ead18a3fb5b904241e33b7cd66e4&w=900",
    "https://img.freepik.com/foto-gratis/amistoso-perro-basenji-inteligente-dando-su-pata-cerca-aislado-blanco_346278-1626.jpg?t=st=1658368661~exp=1658369261~hmac=a102ee99d6d2fcb160adb408bbc0d31e820ef18baffb05041eb748afcbf8b271&w=740",
    "https://img.freepik.com/foto-gratis/perro-pequeno-siendo-adorable-retrato-estudio_23-2149016947.jpg?size=626&ext=jpg&uid=R50194990&ga=GA1.2.1371446412.1647650461"]
    useEffect(()=>{
        if(imgSelect.numeroImg===null){
            var a=document.querySelectorAll(".checkboxSelectRaza")
            a[0].checked=false;
            a[1].checked=false;
            a[2].checked=false;
            a[3].checked=false;
        }
    })
    return (
        <div className='divImgRazaSelect'>
            <img src={arrayImg[urlImg]} alt="" />
            <input type="checkbox" className="checkboxSelectRaza" 
                onClick={(e)=>{
                    if(e.target.checked){setImgSelect({numeroImg:urlImg, urlImg:arrayImg[urlImg]})}
                    else{setImgSelect({numeroImg:null, urlImg:""})}
                }}
                disabled={imgSelect.numeroImg===null || imgSelect.numeroImg===urlImg ? false : true}
            />
        </div>
    )
}

export default DivImgRazaSelect