import React from 'react'
import "../../Styles/Expediente.css"
import { useEffect, useState } from 'react';
import obtenerPacientes from "../../Services/getPacientes"
import PostPacientes from '../../Services/postPacientes';

function ExpedienteMedico() {

        const [NombrePaciente, setNombrePaciente] = useState(''); // 
        const [CedulaPaciente, setCedulaPaciente] = useState(''); // 
        const [FechaNacimientoPaciente, setFechaNacimientoPaciente] = useState(''); // 
        const [TelefonoPaciente, setTelefonoPaciente] = useState(''); // 
        const [NotasPaciente, setNotasPaciente] = useState(''); // 
        const [SexoPaciente, setSexoPaciente] = useState(''); // 
        const [ConsultaPaciente, setConsultaPaciente] = useState(''); // 

        const [pacientes, setPacientes] = useState([]); //
        
    useEffect(() => { //
        const fetchUsers = async () => { //
          const infoPaciente = await obtenerPacientes(); //
         
          setPacientes(infoPaciente); //
     
        };
        fetchUsers(); //
      }, []); //
    
        function cargaNombrePaciente(event) { //captura los datos
          setNombrePaciente(event.target.value); //
        }
    
        function cargaCedulaPaciente(event) { //
                setCedulaPaciente(event.target.value); //
        }
        
        function cargaFechaNacimientoPaciente(event) { //captura los datos
                setFechaNacimientoPaciente(event.target.value); //
        }
        
        function cargaTelefonoPaciente(event) { //
                setTelefonoPaciente(event.target.value); //
        }

        function cargaNotasPaciente(event) { //captura los datos
                setNotasPaciente(event.target.value); //
        }

        function cargaSexo(event) { //captura los datos
                setSexoPaciente(event.target.value); //
               }

        function cargaConsultaPaciente(event) { //captura los datos
                setConsultaPaciente(event.target.value); //
        }
        
        const botonGuardarPaciente = () => {

        const EncontrarCedula = pacientes.some(paciente => paciente.CedulaPaciente === CedulaPaciente);
                console.log(EncontrarCedula);

                if (NombrePaciente.trim() === "" || 
                CedulaPaciente.trim() === "" || 
                FechaNacimientoPaciente.trim() === "" ||
                SexoPaciente.trim() === ""
        ) {
                        console.log("No se permiten espacios vacios");
                }else{
                        if (EncontrarCedula === false) {
                                console.log("paciente registrado exitosamente");
                                
                                PostPacientes(NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente)
                        }   
                }
        }

  return (
  <div>
          <h1>Expediente</h1>

        <div className='divFormularioExpediente'>
              <h5>Datos personales</h5>

              <span>Nombre del paciente</span>
              <input value={NombrePaciente} onChange={cargaNombrePaciente} type="text" placeholder='Nombre del paciente'/>
<br />
              <span>Número de identificación</span>
              <input value={CedulaPaciente} onChange={cargaCedulaPaciente} type="text" placeholder='Número de identificación'/>
<br />
              <span>Fecha de nacimiento</span>
              <input value={FechaNacimientoPaciente} onChange={cargaFechaNacimientoPaciente} type="date" name="" id="" />
<br />
              <span>Sexo</span>
                  <select value={SexoPaciente} onChange={cargaSexo}>
                        <option value="">Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                  </select>
<br />
              <span>Número de teléfono</span>
              <input value={TelefonoPaciente} onChange={cargaTelefonoPaciente} type="number" placeholder='Número de teléfono'/>
<br />
              <span>Cita</span>
              <select value={ConsultaPaciente} onChange={cargaConsultaPaciente}>
                        <option value="">Seleccionar</option>
                        <option value="Quiropodia">Quiropodia</option>
                        <option value="Consulta General">Consulta General</option>
                  </select>
<br />
              <span>Notas:</span>
              <textarea value={NotasPaciente} onChange={cargaNotasPaciente} name="message" placeholder='Dirección'/>
<br />
              <button onClick={botonGuardarPaciente}>Guardar paciente</button>

              <hr />




        
        </div>
  <br />
  <br />
</div>
  )
}

export default ExpedienteMedico