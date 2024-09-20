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
            <p className='textoContact'>Si necesitas comunicarte directamente con nosotras, estos son nuestros canales de comunicación:</p>

<br />
    <div className='divInfoContacto'>



      <div className="cardContact">
         <img src={IconoTelefono} className="imagen-card-telefono" alt="Icono Telefono"  />
                  <div className="card-body-Contact">
                    <p className="card-text-Contact">Jennifer: +506 8320-4111
                      <br />
                      Lilliana: +506 8371-1759
                    </p>
                    <br />
                  </div>
      </div>




        <div className="cardContact">
         <img src={IconoUbicacion} className="imagen-card-ubicacion" alt="Icono Ubicacion" />
                  <div className="card-body-Contact">
                    <p className="card-text-Contact">150 metros Sur del EBAIS de Nosara, Nicoya, Guanacaste</p>
                  <br />
                  </div>
      </div>




      <div className="cardContact">
         <img src={IconoCorreo} className="imagen-card-correo" alt="Icono Correo" />
                  <div className="card-body-Contact">
                    <p className="card-text-Contact">centromediconosara@hotmail.com</p>
                  </div>
                  <br />
      </div>


  </div>

  <br />
  <br />
  <br />
</div>
  )
}

export default Contact