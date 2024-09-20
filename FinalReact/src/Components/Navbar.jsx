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
                    <div><Link to="/" className='textoLink'>Main</Link></div>
                    <div><Link to= "/AboutUs" className='textoLink'>Acerca de nosotros</Link></div>
                    <div><Link to= "/Services" className='textoLink'>Servicios</Link></div>
                    <div><Link to= "/Contact" className='textoLink'>Contacto</Link></div>
                    <div><Link to= "/Alianzas" className='textoLink'>Alianzas</Link></div>
                    <div><Link to= "/Login"className='textoLink'>Iniciar Sesión</Link></div>
              </div>
        </div>
        <br />

  </div>
  )
}

export default Navbar