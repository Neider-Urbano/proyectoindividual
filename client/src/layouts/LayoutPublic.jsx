import React from 'react'
import Nav from '../components/header/Nav'
import "../styles/pages/LayoutPublic.css"

const LayoutPublic = ({children}) => {
  return (
    <div className="divLayoutPublic">
        <Nav />
        <main className="main">
            {children}
        </main>
    </div>
  )
}

export default LayoutPublic