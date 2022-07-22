import React, {useState, useEffect} from 'react'
import "../../../../styles/Components/Main/Pagination.css"

const Pagination = ({pagina, setPagina, maximo, cantidadRazas}) => {
  const [valuePagina,setValuePagina]=useState(1)
    const nextPagina=()=>{ setValuePagina(Math.ceil(valuePagina)+1)
                            setPagina(Math.ceil(pagina)+1)}
   
    const previousPagina=()=>{setValuePagina(Math.ceil(valuePagina)-1)
                              setPagina(Math.ceil(pagina)-1)}

    const onKeyDown=(e)=>{
      var {value}=e.target;
      if(e.keyCode==13 && pagina !==null){
        if(parseInt(value)<1  || parseInt(value)>Math.ceil(maximo) || isNaN(parseInt(value))){
          setPagina(1); setValuePagina(1)
        }else{
          setPagina(parseInt(value))
        }
      }
    }
    const onChange=(e)=>{
      if(pagina!==null)setValuePagina(e.target.value)
    }
    useEffect(()=>{
      if(cantidadRazas<9){
        setPagina(1); setValuePagina(1)
      }
    },[cantidadRazas])
  return (
    <div className="divPagination">
      <div className="informacionNumeroPaginas">
          <input type="text" placeholder="0" 
            onKeyDown={(e)=>{onKeyDown(e)}}  value={valuePagina}                  /* pag = ?*/
            onChange={(e)=>{onChange(e)}}    disabled={cantidadRazas<9}
          />
          <p>de {Math.ceil(maximo)}</p>                                           
      </div>

      <input type="button" value="<" 
              className="inputsPagination"
              onClick={()=>{ if(pagina!==null) previousPagina();}}               /* < */
              disabled={(pagina===1 || pagina<1) || cantidadRazas<9}
      />

      <input type="button" value=">" 
            className="inputsPagination"
            onClick={()=>{if(pagina!==null) nextPagina();}}                       /* > */
            disabled={(pagina===Math.ceil(maximo) || 
                        pagina>Math.ceil(maximo)) || cantidadRazas<9}
      />
    </div>
  )
}

export default Pagination