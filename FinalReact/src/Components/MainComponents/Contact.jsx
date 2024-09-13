import React from 'react'
import IconoTelefono from "../../img/llamada_icon.png"
import IconoUbicacion from "../../img/ubicacion_icono.png"
import IconoCorreo from "../../img/email_icon.png"
import "../../Styles/Contact.css"

function Contact() {
  return (
    <div>

<hr />
    <br />
    <h1>Página de contacto</h1>
    <br />
            <p className='textoContact'>Si necesitas comunicarte directamente con nosotras, estos son nuestros canales de comunicación:</p>

<br />
<br />
<div className='divInfoContacto'>
            <div className='cuadrosContact'>
                <img className='icono' src={IconoTelefono} alt="Icono Telefono"/>
                <br />
                <span>Jennifer: +506 8320-4111</span>
                <br />
                <span>Lilliana: +506 8371-1759</span>
            </div>

            <div className='cuadrosContact'>
                <img className='icono' src={IconoUbicacion} alt="Icono Ubicacion"/>
                <br />
                <span>150 metros Sur del EBAIS de Nosara, Nicoya, Guanacaste</span>
            </div>

            <div className='cuadrosContact'>
                <img className='icono' src={IconoCorreo} alt="Icono Correo"/>
                <br />
                <span>centromediconosara@hotmail.com</span>
            </div>
  </div>
<br /><br /><br /><br />
</div>
  )
}

export default Contact