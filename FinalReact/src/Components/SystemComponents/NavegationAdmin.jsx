import React from 'react';
import { Link } from "react-router-dom";
import LogoCMN from "../../img/LogoCMN.jpeg";
import { useNavigate } from 'react-router-dom';
import LogoQuiroLily from "../../img/logoQuiroLily.jpeg";
import "../../Styles/NavegationAdmin.css";
import 'bootstrap/dist/css/bootstrap.min.css';

function NavegationAdmin() {

  const navigate = useNavigate();

    const botonCerrarSesion = () => {
 
        localStorage.removeItem('Autenticado'); // elimina localStorage, quita la autenticación
        navigate('/'); // redirige a la página principal

    } // cierre del boton de Cerrar Sesion

  return (
    <div>


      <ul className="nav nav-pills">

      <div className='divImagenes'>
            <img className='logoQuiroLily' src={LogoQuiroLily} alt="Logo Quiro Lily" />
            <img className='logoCentroMedico' src={LogoCMN} alt="Logo Centro Medico" />
      </div>

      <div className='divLinks'>
            <li className="nav-item">
                <p className="nav-link" ><Link className='linkPrincipal' to= "/Register">Registro</Link></p>
            </li>

            <li className="nav-item">
                <p className="nav-link"><Link className='linkPrincipal' to= "/Expediente">Expediente</Link></p>
            </li>
        
            <li className="nav-item">
            <p className="nav-link"><Link className='linkPrincipal' to= "/Historial">Historial</Link></p>
            </li>

            <li className="nav-item">
              <button className='botonCerrarSesionAdmin' onClick={botonCerrarSesion}>Cerrar Sesión</button>
            </li>
        </div>

      </ul>

      <hr />
    </div>
  )
}

export default NavegationAdmin