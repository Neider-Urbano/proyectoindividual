import React from 'react'
import "../../styles/Components/LoadingCrearRaza.css"

const LoadingCrearRaza = () => {
    const estilosInline={
            display: 'inline-block',
            width: '10px',
            height: '10px'
    }
  return (
    <div className="lds-dual-ring" style={estilosInline}></div>
  )
}

export default LoadingCrearRaza
