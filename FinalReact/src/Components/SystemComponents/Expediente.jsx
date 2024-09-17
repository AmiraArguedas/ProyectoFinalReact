import React from 'react'
import "../../Styles/Expediente.css"
import { useEffect, useState } from 'react';
import obtenerPacientes from "../../Services/getPacientes"
import PostPacientes from '../../Services/postPacientes';

import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';


function ExpedienteMedico() {

        const [NombrePaciente, setNombrePaciente] = useState(''); // 
        const [CedulaPaciente, setCedulaPaciente] = useState(''); // 
        const [FechaNacimientoPaciente, setFechaNacimientoPaciente] = useState(''); // 
        const [SexoPaciente, setSexoPaciente] = useState(''); // 
        const [TelefonoPaciente, setTelefonoPaciente] = useState(''); // 
        const [ConsultaPaciente, setConsultaPaciente] = useState(''); // 
        const [NotasPaciente, setNotasPaciente] = useState(''); // 
        const [AntecedentesMedicosPersonales, setAntecedentesMedicosPersonales] = useState(''); // 
        const [AntecedentesMedicosFamiliares, setAntecedentesMedicosFamiliares] = useState(''); // 
        const [NotasAntecedentesMedicos, setNotasAntecedentesMedicos] = useState(''); // 
        const [MotivoConsulta, setMotivoConsulta] = useState(''); // 
        const [PresionArterial, setPresionArterial] = useState(''); // 
        const [FrecuenciaCardiaca, setFrecuenciaCardiaca] = useState(''); // 
        const [FrecuenciaRespiratoria, setFrecuenciaRespiratoria] = useState(''); // 
        const [Temperatura, setTemperatura] = useState(''); // 
        const [NotasExamenFisico, setNotasExamenFisico] = useState(''); // 
        const [Diagnostico, setDiagnostico] = useState(''); // 
        const [MedicamentosPrescritos, setMedicamentosPrescritos] = useState(''); // 
        const [TratamientosRecomendados, setTratamientosRecomendados] = useState(''); // 
        const [NotasTratamiento, setNotasTratamiento] = useState(''); // 

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
                setConsultaPaciente(event.target.value); // kkkkkkkkkkkkkkkkkkkkkkkkkk
        }

        function cargaAntecedentesMedicosPersonales(event) { //captura los datos
                setAntecedentesMedicosPersonales(event.target.value); //
        }

        function cargaAntecedentesMedicosFamiliares(event) { //captura los datos
                setAntecedentesMedicosFamiliares(event.target.value); //
        }

        function cargaNotasAntecedentesMedicos(event) { //captura los datos
                setNotasAntecedentesMedicos(event.target.value); //
        }

        function cargaMotivoConsulta(event) { //captura los datos
                setMotivoConsulta(event.target.value); //
        }

        function cargaPresionArterial(event) { //captura los datos
                setPresionArterial(event.target.value); //
        }

        function cargaFrecuenciaCardiaca(event) { //captura los datos
                setFrecuenciaCardiaca(event.target.value); //
        }

        function cargaFrecuenciaRespiratoria(event) { //captura los datos
                setFrecuenciaRespiratoria(event.target.value); //
        }

        function cargaTemperatura(event) { //captura los datos
                setTemperatura(event.target.value); //
        }

        function cargaNotasExamenFisico(event) { //captura los datos
                setNotasExamenFisico(event.target.value); //
        }

        function cargaDiagnostico(event) { //captura los datos
                setDiagnostico(event.target.value); //
        }
        
        function cargaMedicamentosPrescritos(event) { //captura los datos
                setMedicamentosPrescritos(event.target.value); //
        }
        
        function cargaTratamientosRecomendados(event) { //captura los datos
                setTratamientosRecomendados(event.target.value); //
        }
        
        function cargaNotasTratamiento(event) { //captura los datos
                setNotasTratamiento(event.target.value); //
        }



        const botonGuardarPaciente = () => {

        const EncontrarCedula = pacientes.some(paciente => paciente.CedulaPaciente === CedulaPaciente);
                console.log(EncontrarCedula);

                if (NombrePaciente.trim() === "" || CedulaPaciente.trim() === "" || FechaNacimientoPaciente.trim() === "" || SexoPaciente.trim() === "" || TelefonoPaciente.trim() === "" || ConsultaPaciente.trim() === "" || NotasPaciente.trim() === "") {
                        console.log("No se permiten espacios vacios");
                }else{
                        if (EncontrarCedula === false) {
                                console.log("paciente registrado exitosamente");
                                
                                PostPacientes(NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente, AntecedentesMedicosPersonales, AntecedentesMedicosFamiliares, NotasAntecedentesMedicos, MotivoConsulta, PresionArterial, FrecuenciaCardiaca, FrecuenciaRespiratoria, Temperatura, NotasExamenFisico, Diagnostico, MedicamentosPrescritos, TratamientosRecomendados, NotasTratamiento)
                        }   
                }
        }

        const botonEliminarPaciente = () =>{
                console.log("clickeaste");
        }


        // Controla la funcionalidad de los botones de abrir y cerrar modal
        const [show, setShow] = useState(false);
        const handleShow = () => setShow(true);
        const handleClose = () => setShow(false);

        const botonModificarInfo = () => {
                console.log("Has editado el contenido");
                
        }


  return (
  <div>
          <h1>Expediente</h1>

        <div className='divFormularioExpediente'>
              <h5>Datos personales</h5>

              <span>Nombre del paciente</span>
              <input value={NombrePaciente} onChange={cargaNombrePaciente} type="text" placeholder='Nombre del paciente'/>

              <span>Número de identificación</span>
              <input value={CedulaPaciente} onChange={cargaCedulaPaciente} type="text" placeholder='Número de identificación'/>

              <span>Fecha de nacimiento</span>
              <input value={FechaNacimientoPaciente} onChange={cargaFechaNacimientoPaciente} type="date"/>
<br />
              <span>Sexo</span>
                  <select value={SexoPaciente} onChange={cargaSexo}>
                        <option value="">Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                  </select>

              <span>Número de teléfono</span>
              <input value={TelefonoPaciente} onChange={cargaTelefonoPaciente} type="number" placeholder='Número de teléfono'/>

              <span>Cita</span>
                <select value={ConsultaPaciente} onChange={cargaConsultaPaciente}>
                        <option value="">Seleccionar</option>
                        <option value="Quiropodia">Quiropodia</option>
                        <option value="Consulta General">Consulta General</option>
                </select>

              <span>Notas:</span>
              <textarea value={NotasPaciente} onChange={cargaNotasPaciente} name="message" placeholder='Dirección'/>
<br />

<hr />
                <h5>Antecedentes médicos</h5>

                <span>Personales</span>
                <textarea value={AntecedentesMedicosPersonales} onChange={cargaAntecedentesMedicosPersonales} placeholder='Antecedentes médicos personales'></textarea>

                <span>Familiares</span>
                <textarea value={AntecedentesMedicosFamiliares} onChange={cargaAntecedentesMedicosFamiliares} placeholder='Antecedentes médicos familiares'></textarea>

                <span>Notas:</span>
                <textarea value={NotasAntecedentesMedicos} onChange={cargaNotasAntecedentesMedicos} placeholder='Notas:'></textarea>
<hr />
                <h5>Consulta médica</h5>

                <span>Motivos de la consulta</span>
                <textarea value={MotivoConsulta} onChange={cargaMotivoConsulta} placeholder='Motivos de la consulta'></textarea>
<br />
<br />
                <h6>Signos y Exámen Físico</h6>
<br />
                <span>Presión arterial</span>
                <input value={PresionArterial} onChange={cargaPresionArterial} type="text" placeholder='Presión arterial'/>

                <span>Frecuencia cardiaca</span>
                <input value={FrecuenciaCardiaca} onChange={cargaFrecuenciaCardiaca} type="number" placeholder='Frecuencia respiratoria'/>

                <span>Frecuencia respiratoria</span>
                <input value={FrecuenciaRespiratoria} onChange={cargaFrecuenciaRespiratoria} type="number" placeholder='Frecuencia cardiaca'/>
<br />
                <span>Temperatura</span>
                <input value={Temperatura} onChange={cargaTemperatura} type="number" placeholder='Temperatura'/>

                <span>Adjuntar exámenes o imágenes</span>
                <input type="file"/>

                <span>Notas:</span>
                <textarea value={NotasExamenFisico} onChange={cargaNotasExamenFisico} placeholder='Notas'></textarea>
<hr />
                <h5>Diagnóstico</h5>

                <textarea value={Diagnostico} onChange={cargaDiagnostico} placeholder='Diagnóstico médico'></textarea>
<hr />
                <h5>Tratamiento</h5>
                <span>Medicamentos prescritos</span>
                <textarea value={MedicamentosPrescritos} onChange={cargaMedicamentosPrescritos} placeholder='Medicamentos recetados (dosis y frecuencia)'></textarea>

                <span>Tratamiento recomendados</span>
                <textarea value={TratamientosRecomendados} onChange={cargaTratamientosRecomendados} placeholder='Tratamiento recomendados / sugeridos'></textarea>

                <span>Notas:</span>
                <textarea value={NotasTratamiento} onChange={cargaNotasTratamiento} placeholder='Notas'></textarea>
<hr />

              <button onClick={botonGuardarPaciente}>Guardar paciente</button>
<br />
<br />
        </div>
              <hr />

              <h4>Pacientes registrados</h4>

                        {pacientes.map((pacientes) => (
                        <p key={pacientes.id}>{pacientes.CedulaPaciente} {pacientes.NombrePaciente} <Button variant="primary" onClick={handleShow}>Editar</Button> <button onClick={botonEliminarPaciente}>ELIMINAR</button></p>

                        ))}

<hr />
<br />
<br />



<div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
                <Modal.Title>Modificar datos</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <div>


              <span>Nombre del paciente</span>
              <input value={NombrePaciente} onChange={cargaNombrePaciente} type="text" placeholder='Nombre del paciente'/>
<br />
              <span>Número de identificación</span>
              <input value={CedulaPaciente} onChange={cargaCedulaPaciente} type="text" placeholder='Número de identificación'/>
<br />
              <span>Fecha de nacimiento</span>
              <input value={FechaNacimientoPaciente} onChange={cargaFechaNacimientoPaciente} type="date"/>
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


              </div>
          </Modal.Body>

          <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                <Button variant="primary" onClick={botonModificarInfo}>Guardar</Button>
          </Modal.Footer>

      </Modal>
    </div>
  






</div>
  )
}

export default ExpedienteMedico