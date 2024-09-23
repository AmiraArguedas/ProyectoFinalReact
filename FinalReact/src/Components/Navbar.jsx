import React from 'react';
import "../Styles/Narbar.css";
import LogoCMN from "../img/LogoCMN.jpeg";
import LogoQuiroLily from "../img/LogoQuiroLily.jpeg";
import { Link } from "react-router-dom";

function Navbar() {
  return (



<div>


<ul className="nav nav-pills-principal">

<div className='divImagenesPrincipal'>
      <img className='logoQuiroLily' src={LogoQuiroLily} alt="Logo Quiro Lily" />
      <img className='logoCentroMedico' src={LogoCMN} alt="Logo Centro Medico" />
</div>

<div className='divLinksPrincipal'>
      <li className="nav-item-principal">
          <p className="nav-link-principal" ><Link className='linkPrincipal' to= "/">Main</Link></p>
      </li>

      <li className="nav-item-principal">
          <p className="nav-link-principal"><Link className='linkPrincipal' to= "/AboutUs">Acerca de nosotros</Link></p>
      </li>
  
      <li className="nav-item-principal">
      <p className="nav-link-principal"><Link className='linkPrincipal' to= "/Services">Servicios</Link></p>
      </li>

      <li className="nav-item-principal">
      <p className="nav-link-principal"><Link className='linkPrincipal' to= "/Contact">Contacto</Link></p>
      </li>

      <li className="nav-item-principal">
      <p className="nav-link-principal"><Link className='linkPrincipal' to= "/Alianzas">Alianzas</Link></p>
      </li>

      <li className="nav-item-principal">
      <p className="nav-link-principal"><Link className='linkPrincipal' to= "/Login">Login</Link></p>
      </li>
  </div>

</ul>

<hr />
</div>


  )
}

export default Navbar