import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import LogoCentroRadiologico from "../../img/Logo_CRN.jpg"
import LogoCepia from "../../img/LogoCepia.jpg"
import LogoFoodBank from "../../img/LogoBancoAlimentos.png"
import LogoNosaraLab from "../../img/LogoLab.png"
import LogoPVM from "../../img/LogoPVM.jpg"
import "../../Styles/Aliados.css"
import { Link } from "react-router-dom"

function Aliados() {
  return (
    <div>

<hr />
        <br />
        <p className='textoAlianzas'>Como parte de nuestro compromiso con la responsabilidad social y el apoyo a la comunidad, contamos con aliados estratégicos que facilitan y optimizan el acceso a una variedad de servicios médicos a precios reducidos.</p>
  <br />
  <br />
        <div className='divCards'>

        <div className="card">
        <img className='CepiaFoto' src={LogoCepia} alt="" />
              <div className="card-body">
                <h5 className="card-title">CEPIA</h5>
                <p className="card-text">Es una organización sin fines de lucro busca promover la salud mental y física de familias y de 
                  escasos recursos en las comunidades de Guanacaste, para mejorar su calidad de vida.</p>
                  <Link className='textoLinkAliados' to="https://cepiacostarica.org/es/">Más info</Link>
              </div>
        </div>

        <div className="card">
        <img className='FoodBankFoto' src={LogoFoodBank} alt="" />
              <div className="card-body">
                <h5 className="card-title">Nosara Food Bank</h5>
                <p className="card-text">La misión del Banco de Alimentos de Nosara es proporcionar alimentos 
                  y otras necesidades del hogar a familias que viven en extrema pobreza en el Distrito 
                  de Nosara.</p>
                  <Link className='textoLinkAliados' to="https://www.nosarafoodbank.org/">Más info</Link>
              </div>
        </div>

        <div className="card">
        <img className='NosaraLabFoto' src={LogoNosaraLab} alt="" />
              <div className="card-body">
                <h5 className="card-title">Nosara Lab</h5>
                <p className="card-text">Laboratorio clínico de vanguardia, comprometido con la salud y el bienestar, donde realizamos tomas de muestras 
                  y análisis clínicos precisos y confiables.</p>
                  <Link className='textoLinkAliados' to="https://nosaralab.com/index.html">Más info</Link>
              </div>
        </div>

        <div className="card">
        <img className='CentroRadiologicoFoto' src={LogoCentroRadiologico} alt="" />
              <div className="card-body">
                <h5 className="card-title">Centro Radiológico</h5>
                <p className="card-text">Ofrecen servicios en rayos X digital, mamografía digital y ultrasonidos, con una tecnología de 
                  punta cuya prioridad es la salud integral de nuestros clientes.</p>
                <Link className='textoLinkAliados' to="https://www.facebook.com/share/7FqjEdDTn2gyL1cL/?mibextid=LQQJ4d">Más info</Link>
              </div>
        </div>

        <div className="card">
        <img className='PVMFoto' src={LogoPVM} alt="" />
              <div className="card-body">
                <h5 className="card-title">Proyecto Vida Mujer</h5>
                <p className="card-text">Brindan acceso a un dispositivo intrauterino como 
                  método anticonceptivo seguro y no hormonal. También educan acerca de la 
                  sexualidad responsable y saludable.</p>
                  <Link className='textoLinkAliados' to="https://cepiacostarica.org/programs/project-vida-mujer/">Más info</Link>
              </div>
        </div>
   
        </div>

    </div>
  )
}

export default Aliados