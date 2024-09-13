import React from 'react'
import Navbar from "../Components/Navbar"
import Contact from "../Components/MainComponents/Contact"
import Mapa from '../Components/MainComponents/Mapa'
import FormEmail from '../Components/MainComponents/FormEmail'

function Contacto() {
  return (
    <div>
        <Navbar />
        <Contact />
        <FormEmail />
        <Mapa />
    </div>
  )
}

export default Contacto
