import React from 'react'
import "../Styles/Narbar.css"
import LogoCMN from "../img/LogoCMN.jpeg"
import LogoQuiroLily from "../img/LogoQuiroLily.jpeg"
import { Link } from "react-router-dom"

function Navbar() {
  return (
<div>
    <div className='NavBar'>
    
            
      <div className='divLogos'>
            <img className='logoQuiroLily' src={LogoQuiroLily} alt="Logo Quiro Lily" />
            <img className='logoCentroMedico' src={LogoCMN} alt="Logo Centro Medico" />
      </div>

              <div className='divPaginas'>
                    <p><Link to="/" className='textoLink'>Main</Link></p>
                    <p><Link to= "/AboutUs" className='textoLink'>Acerca de nosotros</Link></p>
                    <p><Link to= "/Services" className='textoLink'>Servicios</Link></p>
                    <p><Link to= "/Contact" className='textoLink'>Contacto</Link></p>
                    <p><Link to= "/Alianzas" className='textoLink'>Alianzas</Link></p>
                    <p><Link to= "/Login"className='textoLink'>Iniciar Sesión</Link></p>
              </div>
        </div>
  </div>
  )
}

export default Navbar