import React from 'react'
import { Link } from "react-router-dom"

function NavegationAdmin() {
  return (
    <div>
            <div>
                    <p><Link to= "/Register">Registro</Link></p>
                    <p><Link to= "/Expediente">Expediente</Link></p>
                    <p><Link to= "/Login">Historial</Link></p>
              </div>
    </div>
  )
}

export default NavegationAdmin