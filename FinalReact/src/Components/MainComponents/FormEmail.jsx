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
            <p>Puedes contactarnos a través de los números de teléfono 
                <br />
                que se muestran en la parte superior o
                <br />
                envianos tu duda a través de este formulario:</p>
        </div>
                <div>
                <form className='Form' ref={form} onSubmit={sendEmail}>
                    <br />
<br />
                    <h2>Formulario de Contacto</h2>
                        <p>Nombre</p>
                        <input className='inputFormNombre' type="text"/>
<br />
<br />
                        <p>Correo Electrónico</p>
                        <input className='inputFormEmail' type="email"/>
<br />
<br />
                        <p>Mensaje</p>
                        <textarea className='inputFormMensaje' name="message" />
                        <br />
                        <br />
                        <input className='botonEnviarForm' type="submit" value="ENVIAR" />
                    <br />
                    <br />
                </form>
                </div>
    </div>
  );

}

export default FormEmail