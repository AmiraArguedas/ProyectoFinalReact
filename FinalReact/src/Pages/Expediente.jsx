import React from 'react'
import NavegationAdmin from '../Components/SystemComponents/NavegationAdmin'
import ExpedienteMedico from "../Components/SystemComponents/Expediente"
import Footer from '../Components/Footer'

function Expediente() {
  return (
    <div>
        <NavegationAdmin />
        <ExpedienteMedico />
        <Footer />
    </div>
  )
}

export default Expediente