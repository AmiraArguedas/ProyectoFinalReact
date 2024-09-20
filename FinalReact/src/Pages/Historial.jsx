import React from 'react'
import NavegationAdmin from '../Components/SystemComponents/NavegationAdmin'
import HistorialPacientes from '../Components/SystemComponents/HistorialPacientes'
import Footer from '../Components/Footer'

function Historial() {
  return (
    <div>
        <NavegationAdmin />
        <HistorialPacientes />
        <Footer />
    </div>
  )
}

export default Historial