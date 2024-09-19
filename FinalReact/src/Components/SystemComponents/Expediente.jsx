import React from 'react'
import "../../Styles/Expediente.css"
import { useEffect, useState } from 'react';
import obtenerPacientes from "../../Services/getPacientes"
import PostPacientes from '../../Services/postPacientes';
import  {DeletePaciente}  from '../../Services/deletePacientes';
import UpdatePaciente from '../../Services/putPacientes';

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
        const [DatoBase64, setBase64] = useState('');

        // Controla la funcionalidad de los botones de abrir y cerrar modal
        const [show, setShow] = useState(false);
        const handleShow = () =>  setShow(true);
        const handleClose = () => setShow(false);

        const [cargaPac, setCargaPaci] = useState([])
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
                                
                                PostPacientes(NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente, AntecedentesMedicosPersonales, AntecedentesMedicosFamiliares, NotasAntecedentesMedicos, MotivoConsulta, PresionArterial, FrecuenciaCardiaca, FrecuenciaRespiratoria, Temperatura, NotasExamenFisico, Diagnostico, MedicamentosPrescritos, TratamientosRecomendados, NotasTratamiento, DatoBase64)
                        }   
                }
        }

        const inputArchivo = (archivos)=>{
                Array.from(archivos).forEach(archivo=>{
                        const reader = new FileReader();
                        reader.readAsDataURL(archivo);
                        reader.onload = function(){
                                const base64 = reader.result;
                                setBase64(base64)
                        }
                })
        }

        const botonEliminarPaciente = (pacientesId) =>{
                console.log("eliminaste al paciente");
                console.log(pacientesId);
                
               DeletePaciente(pacientesId)
        }

        const botonModificarInfo = (cargaPac) => {
                console.log(cargaPac);
              
                const idModificar = cargaPac[0].id
                console.log(idModificar);             

           UpdatePaciente(idModificar, 
                cargaPac[0].NombrePaciente, 
                cargaPac[0].CedulaPaciente, 
                cargaPac[0].FechaNacimientoPaciente,
                cargaPac[0].SexoPaciente, 
                cargaPac[0].TelefonoPaciente, 
                cargaPac[0].ConsultaPaciente, cargaPac[0].NotasPaciente,
                 cargaPac[0].AntecedentesMedicosPersonales, 
                cargaPac[0].AntecedentesMedicosFamiliares,
                cargaPac[0].NotasAntecedentesMedicos, 
                cargaPac[0].MotivoConsulta, 
                cargaPac[0].PresionArterial,
                cargaPac[0].FrecuenciaCardiaca, 
                cargaPac[0].FrecuenciaRespiratoria, 
                cargaPac[0].Temperatura, 
                cargaPac[0].NotasExamenFisico, 
                cargaPac[0].Diagnostico, 
                cargaPac[0].MedicamentosPrescritos, 
                cargaPac[0].TratamientosRecomendados, 
                cargaPac[0].NotasTratamiento, 
                cargaPac[0].DatoBase64)
        }

        function cargarPac(pacienteId) { // paciente, trae el ID de cada  
                
                const filtroMod = pacientes.filter(paciente => paciente.id === pacienteId)
                setCargaPaci(filtroMod)

                handleShow()            
        }

        const onChangeNombrePaciente = (event) => { // actualica solo el campo correspondiente
                console.log(event.target.value);
                };

        const onChangeCedulaPaciente = (event) => {
                console.log(event.target.value);
        }

        const onChangeFechaNacimientoPaciente = (event) => {
                console.log(event.target.value);
        }

        const onChangeSexo = (event) => {
                console.log(event.target.value);
        }

        
        const onChangeTelefonoPaciente = (event) => {
                console.log(event.target.value);
        }

        
        const onChangeConsultaPaciente = (event) => {
                console.log(event.target.value);
        }

        
        const onChangeNotasPaciente = (event) => {
                console.log(event.target.value);
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
                <input onChange={(e)=>inputArchivo(e.target.files)} type="file"/>

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
                        <p key={pacientes.id}>{pacientes.CedulaPaciente} {pacientes.NombrePaciente} 
                        <Button variant="primary" onClick={e=>cargarPac(pacientes.id)}>Editar</Button> 
                        <button onClick={e => botonEliminarPaciente(pacientes.id)}>ELIMINAR</button></p>
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

              <h5>Datos personales</h5>
              <span>Nombre del paciente</span>
              <input defaultValue={cargaPac[0]?.NombrePaciente}  onChange={onChangeNombrePaciente} type="text" placeholder='Nombre del paciente'/>
<br />
              <span>Número de identificación</span>
              <input defaultValue={cargaPac[0]?.CedulaPaciente} onChange={onChangeCedulaPaciente} type="text" placeholder='Número de identificación'/>
<br />
              <span>Fecha de nacimiento</span>
              <input defaultValue={cargaPac[0]?.FechaNacimientoPaciente} onChange={onChangeFechaNacimientoPaciente} type="date"/>
<br />
              <span>Sexo</span>
                  <select defaultValue={cargaPac[0]?.SexoPaciente} onChange={onChangeSexo}>
                        <option value="">Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                  </select>
<br />
              <span>Número de teléfono</span>
              <input defaultValue={cargaPac[0]?.TelefonoPaciente} onChange={onChangeTelefonoPaciente} type="number" placeholder='Número de teléfono'/>
<br />
              <span>Cita</span>
                <select defaultValue={cargaPac[0]?.ConsultaPaciente} onChange={onChangeConsultaPaciente}>
                        <option value="">Seleccionar</option>
                        <option value="Quiropodia">Quiropodia</option>
                        <option value="Consulta General">Consulta General</option>
                </select>
<br />
              <span>Notas:</span>
              <textarea defaultValue={cargaPac[0]?.NotasPaciente} onChange={onChangeNotasPaciente} name="message" placeholder='Dirección'/>
<br />
<br />
              <h5>Antecedentes médicos</h5>
<br />
                <span>Personales</span>
                <textarea defaultValue={cargaPac[0]?.AntecedentesMedicosPersonales} onChange={cargaAntecedentesMedicosPersonales} placeholder='Antecedentes médicos personales'></textarea>
<br />
                <span>Familiares</span>
                <textarea defaultValue={cargaPac[0]?.AntecedentesMedicosFamiliares} onChange={cargaAntecedentesMedicosFamiliares} placeholder='Antecedentes médicos familiares'></textarea>
<br />
                <span>Notas:</span>
                <textarea defaultValue={cargaPac[0]?.NotasAntecedentesMedicos} onChange={cargaNotasAntecedentesMedicos} placeholder='Notas:'></textarea>
<br />
<br />
                <h5>Consulta médica</h5>

                <span>Motivos de la consulta</span>
                <textarea defaultValue={cargaPac[0]?.MotivoConsulta} onChange={cargaMotivoConsulta} placeholder='Motivos de la consulta'></textarea>
<br />
                <h6>Signos y Exámen Físico</h6>

                <span>Presión arterial</span>
                <input defaultValue={cargaPac[0]?.PresionArterial} onChange={cargaPresionArterial} type="text" placeholder='Presión arterial'/>
<br />
                <span>Frecuencia cardiaca</span>
                <input defaultValue={cargaPac[0]?.FrecuenciaCardiaca} onChange={cargaFrecuenciaCardiaca} type="number" placeholder='Frecuencia respiratoria'/>
<br />
                <span>Frecuencia respiratoria</span>
                <input defaultValue={cargaPac[0]?.FrecuenciaRespiratoria} onChange={cargaFrecuenciaRespiratoria} type="number" placeholder='Frecuencia cardiaca'/>
<br />
                <span>Temperatura</span>
                <input defaultValue={cargaPac[0]?.Temperatura} onChange={cargaTemperatura} type="number" placeholder='Temperatura'/>
<br />
                <span>Adjuntar exámenes o imágenes</span>
                <input onChange={(e)=>inputArchivo(e.target.files)} type="file"/>
<br />
                <span>Notas:</span>
                <textarea defaultValue={cargaPac[0]?.NotasExamenFisico} onChange={cargaNotasExamenFisico} placeholder='Notas'></textarea>
<br />
<br />
                <h5>Diagnóstico</h5>
<br />
                <textarea defaultValue={cargaPac[0]?.Diagnostico} onChange={cargaDiagnostico} placeholder='Diagnóstico médico'></textarea>
<br />
<br />
                <h5>Tratamiento</h5>
                <span>Medicamentos prescritos</span>
                <textarea defaultValue={cargaPac[0]?.MedicamentosPrescritos} onChange={cargaMedicamentosPrescritos} placeholder='Medicamentos recetados (dosis y frecuencia)'></textarea>
<br />
                <span>Tratamiento recomendados</span>
                <textarea defaultValue={cargaPac[0]?.TratamientosRecomendados} onChange={cargaTratamientosRecomendados} placeholder='Tratamiento recomendados / sugeridos'></textarea>
<br />
                <span>Notas:</span>
                <textarea defaultValue={cargaPac[0]?.NotasTratamiento} onChange={cargaNotasTratamiento} placeholder='Notas'></textarea>

              </div>
          </Modal.Body>

          <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Cerrar</Button>
                <Button variant="primary" onClick={e => {botonModificarInfo(cargaPac)}}>Guardar</Button>
          </Modal.Footer>

      </Modal>
    </div>

</div>
  )
}

export default ExpedienteMedico