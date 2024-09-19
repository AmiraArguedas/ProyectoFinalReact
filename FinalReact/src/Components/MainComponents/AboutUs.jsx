import React from 'react'
import fotoConsultorio from "../../img/consultorio2_imagen.jpg"
import "../../Styles/AboutUs.css"

function AboutUs() {
  return (
    <div>
<hr />
      <br />
      <div className='divAboutUs'>
            <div>
                <p className='textoAboutUs'>Somos dos mujeres comprometidas con la salud integral de la comunidad de Nosara. 
                  A través de nuestra consulta médica y servicios de quiropodia, nos enfocamos en ofrecer una atención de alta calidad, 
                  caracterizada por su calidez y humildad.</p>
                <p  className='textoAboutUs'>Nuestra consulta está diseñada para satisfacer las necesidades específicas de 
                cada usuario, proporcionando soluciones efectivas y personalizadas. Creemos en un enfoque integral que mejora la calidad 
                de vida de nuestros pacientes mediante un cuidado profesional y cercano. </p>
                <p  className='textoAboutUs'>Estamos aquí para apoyar a nuestra comunidad en 
                su camino hacia una salud óptima, brindando un servicio atento y comprometido con el bienestar físico de cada persona.</p>
            </div>

            <div>
                <img className='fotoConsultorio' src={fotoConsultorio} alt="" />
            </div>
      </div>
<br />
<br />

<div className='divTodaInfoValores'>

      <h1 className='tituloValores'>Nuestros valores</h1>
              
      <div className='divValores'>

            <div>
                        <div className='divValorIndividual'>
                            <p className='tituloValor'>Empatía</p>
                                  <p className='textoValor'>Comprender y compartir los sentimientos y preocupaciones de los pacientes, proporcionando un trato humano y comprensivo.</p>
                        </div>                    
                           
                        <div className='divValorIndividual'>
                            <p className='tituloValor'>Compromiso de calidad</p>
                                  <p className='textoValor'>Ofrecer atención médica basada en las mejores prácticas y estándares clínicos para asegurar resultados óptimos para los pacientes.</p>
                        </div>
                           
                        <div className='divValorIndividual'>
                            <p className='tituloValor'>Integridad</p>
                                  <p className='textoValor'> Actuar con honestidad y transparencia en todas las interacciones, tanto con los pacientes como con el personal.</p>
                        </div>

                        <div className='divValorIndividual'>
                            <p className='tituloValor'>Respeto</p>
                                  <p className='textoValor'>Valorar y tratar a cada paciente con dignidad, respetando su privacidad y autonomía en las decisiones sobre su salud.</p>
                        </div>
                     
            </div>

            <div>
                        <div className='divValorIndividual'>
                          <p className='tituloValor'>Confidencialidad</p>
                                  <p className='textoValor'>Proteger la información personal y médica de los pacientes, garantizando que sus datos sean manejados de manera segura y privada.</p>
                        </div>

                        <div className='divValorIndividual'>
                          <p className='tituloValor'>Responsabilidad</p>
                                  <p className='textoValor'>Ser responsable en la toma de decisiones médicas y en la gestión del consultorio, asegurando que todas las acciones estén orientadas al bienestar del paciente.</p>
                        </div>                    
                         
                        <div className='divValorIndividual'>
                          <p className='tituloValor'>Innovación</p>
                                  <p className='textoValor'> Mantenerse actualizado con los avances médicos y tecnológicos para mejorar continuamente la calidad de la atención.</p>
                        </div>
                          
                        <div className='divValorIndividual'>
                          <p className='tituloValor'>Educación y prevención</p>
                                  <p className='textoValor'>Promover la educación del paciente y la prevención de enfermedades como parte integral de la atención médica.</p>
                        </div>
            </div>

                      <br />
      </div>
</div> 





    </div> 
  )
}

export default AboutUs