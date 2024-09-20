import React, { useRef } from 'react';
import emailjs from "@emailjs/browser"
import "../../Styles/FormEmail.css"

function FormEmail() {

    const form = useRef();
    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs
        .sendForm('service_lgmm5so', 'template_8mhz2yi', form.current, {
          publicKey: 'xKYQea8wmj0LgY5FG',
        })
        .then(
          () => {
            console.log('SUCCESS!');
          },
          (error) => {
            console.log('FAILED...', error.text);
          },
        );
    };

return (

    <div className='divForm'>
        <div className='divTexto'>
            <p>Puedes contactarnos a través de los números de teléfono que se muestran en la parte superior o envianos tu duda a través de este formulario:</p>
        <br />
        </div>

                <div>
                <form className='Form' ref={form} onSubmit={sendEmail}>
                    <h2 className='tituloForm'>Formulario de Contacto</h2>
                        <p className='textoForm'>Nombre</p>
                        <input className='inputFormNombre' type="text"/>

                        <p className='textoForm'>Correo Electrónico</p>
                        <input className='inputFormEmail' type="email"/>

                        <p className='textoForm'>Mensaje</p>
                        <textarea className='inputFormMensaje' name="message" />
<br />
                        <input className='botonEnviarForm' type="submit" value="ENVIAR" />

                </form>
                </div>
    </div>
  );

}

export default FormEmail