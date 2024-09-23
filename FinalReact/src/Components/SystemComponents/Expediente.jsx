import React from 'react';
import "../../Styles/Expediente.css";
import { useEffect, useState } from 'react';
import obtenerPacientes from "../../Services/getPacientes";
import PostPacientes from '../../Services/postPacientes';
import PostHistorialPacientes from '../../Services/postHistorial';
import  {DeletePaciente}  from '../../Services/deletePacientes';
import UpdatePaciente from '../../Services/putPacientes';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import Swal from 'sweetalert2';

function ExpedienteMedico() {

        const [NombrePaciente, setNombrePaciente] = useState(''); // "NombrePaciente" es el input que registra y/o modifica el nombre
        const [CedulaPaciente, setCedulaPaciente] = useState(''); // "CedulaPaciente" es el input que registra y/o modifica la cedula
        const [FechaNacimientoPaciente, setFechaNacimientoPaciente] = useState(''); // "CedulaPaciente" es el input que registra y/o modifica la cedula
        const [SexoPaciente, setSexoPaciente] = useState(''); // "SexoPaciente" es el select que agrega y/o modifica el sexo del paciente
        const [TelefonoPaciente, setTelefonoPaciente] = useState(''); // "TelefonoPaciente" es el input que registra y/o modifica el telefono
        const [ConsultaPaciente, setConsultaPaciente] = useState(''); // "ConsultaPaciente" es el select que registra y/o modifica la cita (Medicina General o Quiropodia)
        const [NotasPaciente, setNotasPaciente] = useState(''); // "NotasPaciente" es el input que registra y/o modifica notas de la consulta
        const [AntecedentesMedicosPersonales, setAntecedentesMedicosPersonales] = useState(''); // "AntecedentesMedicosPersonales" es el input que registra y/o modifica antecedentes medicos personales (padecimientos)
        const [AntecedentesMedicosFamiliares, setAntecedentesMedicosFamiliares] = useState(''); // "AntecedentesMedicosFamiliares" es el input que registra y/o modifica antecedentes medicos familiares (padecimientos)
        const [NotasAntecedentesMedicos, setNotasAntecedentesMedicos] = useState(''); // "NotasAntecedentesMedicos" es el input que registra y/o modifica notas de la parte de antecedentes medicos
        const [MotivoConsulta, setMotivoConsulta] = useState(''); // "MotivoConsulta" es el input que registra y/o modifica la razon o motivo de la visita medica 
        const [PresionArterial, setPresionArterial] = useState(''); // "PresionArterial" es el input que registra y/o modifica la presion arterial 
        const [FrecuenciaCardiaca, setFrecuenciaCardiaca] = useState(''); // "FrecuenciaCardiaca" es el input que registra y/o modifica la frecuencia cardiaca
        const [FrecuenciaRespiratoria, setFrecuenciaRespiratoria] = useState(''); // "FrecuenciaRespiratoria" es el input que registra y/o modifica la frecuencia respiratoria
        const [Temperatura, setTemperatura] = useState(''); // "Temperatura" es el input que registra y/o modifica la temperatura 
        const [NotasExamenFisico, setNotasExamenFisico] = useState(''); // "NotasExamenFisico" es el input que registra y/o modifica el examen fisico realizado
        const [Diagnostico, setDiagnostico] = useState(''); // "Diagnostico" es el input que registra y/o modifica el diagnostico detectado o determinado
        const [MedicamentosPrescritos, setMedicamentosPrescritos] = useState(''); // "MedicamentosPrescritos" es el input que registra y/o modifica los medicamentos recomendados o recetados
        const [TratamientosRecomendados, setTratamientosRecomendados] = useState(''); // "TratamientosRecomendados" es el input que registra y/o modifica el tratamiento o recomendaciones extras
        const [NotasTratamiento, setNotasTratamiento] = useState(''); // "NotasTratamiento" es el input que registra y/o modifica las notas del final de la consulta
        const [DatoBase64, setBase64] = useState(''); // "DatoBase64" es el input que registra y/o sustituye el file o archivo agregado

        // Controla la funcionalidad de los botones de abrir y cerrar modal
        const [show, setShow] = useState(false); // estado booleano que controla la visibilidad del modal
        const handleShow = () =>  setShow(true); //  lo establece en true (muestra el modal)
        const handleClose = () => setShow(false); // lo establece en false (oculta el modal)

        // "cargaPac" contiene la info de CADA paciente (a la hora de clickearlo, el agarra la informacion de ese paciente como un array)
        const [cargaPac, setCargaPaci] = useState([]) 

        // "pacientes" es una lista que tiene toda la info de TODOS los pacientes
        const [pacientes, setPacientes] = useState([]); 

    useEffect(() => { // mantiene el control, evita que se renderice de manera descontrolada
        const fetchUsers = async () => { // funcion asincrona para la obtencion de datos, se consulta al servidor
          const infoPaciente = await obtenerPacientes(); // obtiene los datos que estan registrados en el servidor 
         
          setPacientes(infoPaciente); // se fijan los valores que se obtienen con infoPacientes, ahora los establecemos en setPacientes (pacientes)
     
        };
        fetchUsers(); 
      }, []); 
    
        const botonGuardarPaciente = async () => { //boton que guardar a los pacientes y su informacion

                //validacion de campos vacios de la informacion fundamental
                if (NombrePaciente.trim() === "" || CedulaPaciente.trim() === "" || FechaNacimientoPaciente.trim() === "" || SexoPaciente.trim() === "" || TelefonoPaciente.trim() === "" || ConsultaPaciente.trim() === "" || NotasPaciente.trim() === "") {

                        // muestra un mensaje
                        Swal.fire("No se permiten campos vacios con información fundamental para el registro del paciente");

                }else{
                        // espera la respuesta y almacena el nuevo paciente en la variable nuevosPacientes y hace el posteo del paciente
                        const nuevosPacientes = await PostPacientes(NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente, AntecedentesMedicosPersonales, AntecedentesMedicosFamiliares, NotasAntecedentesMedicos, MotivoConsulta, PresionArterial, FrecuenciaCardiaca, FrecuenciaRespiratoria, Temperatura, NotasExamenFisico, Diagnostico, MedicamentosPrescritos, TratamientosRecomendados, NotasTratamiento, DatoBase64);  
                       
                        // setPacientes es una función que se utiliza para actualizar el estado. Array que contiene los pacientes existentes y con [...] se utiliza para crear un nuevo array. Aquí, se está creando un nuevo array que contiene todos los elementos del array pacientes existente más el nuevo paciente (nuevosPacientes)
                        setPacientes([...pacientes, nuevosPacientes]); 

                        // además hace un post en "Historial" (para que todos los datos se guarden en historial también)
                        PostHistorialPacientes(NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente, AntecedentesMedicosPersonales, AntecedentesMedicosFamiliares, NotasAntecedentesMedicos, MotivoConsulta, PresionArterial, FrecuenciaCardiaca, FrecuenciaRespiratoria, Temperatura, NotasExamenFisico, Diagnostico, MedicamentosPrescritos, TratamientosRecomendados, NotasTratamiento)
                        
                        // Setea todos los inputs, para que al agregar al paciente, los inputs queden vacios (sin la info que se ingreso)
                        setNombrePaciente(''); setCedulaPaciente(''); setFechaNacimientoPaciente(''); setSexoPaciente(''); setTelefonoPaciente(''); setConsultaPaciente(''); setNotasPaciente(''); setAntecedentesMedicosPersonales(''); setAntecedentesMedicosFamiliares(''); setNotasAntecedentesMedicos(''); setMotivoConsulta(''); setPresionArterial(''); setFrecuenciaCardiaca(''); setFrecuenciaRespiratoria(''); setTemperatura(''); setNotasExamenFisico(''); setDiagnostico(''); setMedicamentosPrescritos(''); setTratamientosRecomendados(''); setNotasTratamiento(''); setBase64('');

                        // muestra un mensaje
                        Swal.fire({
                                position: "center",
                                icon: "success",
                                title: "Expediente médico registrado",
                                showConfirmButton: false,
                                timer: 1500
                              });
                } // cierre del else
        } // cierre del boton de guardar al paciente

        const inputArchivo = (archivos)=>{ // función "inputArchivo" y recibe una lista de archivos, que se pasa como "archivos"
                Array.from(archivos).forEach(archivo=>{ // convierte la lista de archivos en un array para poder trabajar con cada archivo individualmente /  recorre cada archivo en la lista
                        const reader = new FileReader(); // por cada archivo, se crea un objeto "FileReader", el objeto se utiliza para leer el contenido del archivo
                        reader.readAsDataURL(archivo); // le dice al lector que lea el archivo y lo convierta a un formato que puede ser utilizado en la web (URL)
                        reader.onload = function(){ // cuando el evento onload se activa, permite que el código dentro de esa función maneje el resultado de la lectura (se puede trabajar con los datos del archivo)
                                const base64 = reader.result; // guarda el contenido del archivo en una variable "base64"
                                setBase64(base64) // se fija en setBase64 el contenido que tiene "base64" (que al final es la direccion URL de la imagen o archivo)
                        
                        } // cierre de la funcion onload
                }) // cierre del forEach y funcion flecha
        } // cierre de la funcion "inputArchivo"

        const botonEliminarPaciente = async (pacientesId) => { // botón para eliminar el paciente del registro
                
                // DeletePaciente es función que retorne una promesa, asegura que SOLO después de que el paciente sea eliminado del servidor, se proceda a actualizar la lista local
                await DeletePaciente(pacientesId); // espera a que se complete la eliminación en el servidor
            
                // muestra un mensaje
                Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Paciente eliminado de manera exitosa",
                        showConfirmButton: false,
                        timer: 2500
                      });

                // Usamos filter para crear una nueva lista de pacientes que excluye el paciente que acaba de ser eliminado
                setPacientes(ElimineAutomaticamentePacientes => ElimineAutomaticamentePacientes.filter(paciente => paciente.id !== pacientesId));
        
        } // cierre del boton de eliminar paciente


        function cargarPac(pacienteId) { // "pacienteId" trae el ID de cada uno de los pacientes (al hacer click, devuelve el ID especifico de ese paciente)
                
                //filtroMod devuelve una lista con la informacion del paciente (sus datos especificos)
                const filtroMod = pacientes.filter(paciente => paciente.id === pacienteId)
                setCargaPaci(filtroMod) // se fijan los datos de "filtroMod" en "setCargaPaci"  = "cargaPac"
        
                // "paciente" devuelve un objeto con la info del paciente que se selecciono
                const paciente = filtroMod[0];
        
        setNombrePaciente(paciente.NombrePaciente); // fija los valores y accede a el dato especifico (nombre)
        setCedulaPaciente(paciente.CedulaPaciente); // fija los valores y accede a el dato especifico (cedula)
        setFechaNacimientoPaciente(paciente.FechaNacimientoPaciente); // fija los valores y accede a el dato especifico (fecha nacimiento)
        setSexoPaciente(paciente.SexoPaciente); // fija los valores y accede a el dato especifico (sexo del paciente)
        setTelefonoPaciente(paciente.TelefonoPaciente); // fija los valores y accede a el dato especifico (telefono)
        setConsultaPaciente(paciente.ConsultaPaciente); // fija los valores y accede a el dato especifico (nombre)
        setNotasPaciente(paciente.NotasPaciente); // fija los valores y accede a el dato especifico (nombre)
        setAntecedentesMedicosPersonales(paciente.AntecedentesMedicosPersonales); // fija los valores y accede a el dato especifico (nombre)
        setAntecedentesMedicosFamiliares(paciente.AntecedentesMedicosFamiliares); // fija los valores y accede a el dato especifico (nombre)
        setNotasAntecedentesMedicos(paciente.NotasAntecedentesMedicos); // fija los valores y accede a el dato especifico (nombre)
        setMotivoConsulta(paciente.MotivoConsulta); // fija los valores y accede a el dato especifico (nombre)
        setPresionArterial(paciente.PresionArterial); // fija los valores y accede a el dato especifico (nombre)
        setFrecuenciaCardiaca(paciente.FrecuenciaCardiaca); // fija los valores y accede a el dato especifico (nombre)
        setFrecuenciaRespiratoria(paciente.FrecuenciaRespiratoria); // fija los valores y accede a el dato especifico (nombre)
        setTemperatura(paciente.Temperatura); // fija los valores y accede a el dato especifico (nombre)
        setNotasExamenFisico(paciente.NotasExamenFisico); // fija los valores y accede a el dato especifico (nombre)
        setDiagnostico(paciente.Diagnostico); // fija los valores y accede a el dato especifico (nombre)
        setMedicamentosPrescritos(paciente.MedicamentosPrescritos); // fija los valores y accede a el dato especifico (nombre)
        setTratamientosRecomendados(paciente.TratamientosRecomendados); // fija los valores y accede a el dato especifico (nombre)
        setNotasTratamiento(paciente.NotasTratamiento); // fija los valores y accede a el dato especifico (nombre)
        setBase64(paciente.DatoBase64); // Preserva el archivo base64 si es necesario

                handleShow()  // permite abrir el modal con datos precargados
        }

        const botonModificarInfo = async () => { // boton dentro del modal dice "GUARDAR" y al clickearlo modifica la info 
              
                const idModificar = cargaPac[0].id // accede al ID especifico para mandarlo a editar  
                
                // hace un post en "Historial" (para que todos los datos se guarden en historial también)
                PostHistorialPacientes(NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente, AntecedentesMedicosPersonales, AntecedentesMedicosFamiliares, NotasAntecedentesMedicos, MotivoConsulta, PresionArterial, FrecuenciaCardiaca, FrecuenciaRespiratoria, Temperatura, NotasExamenFisico, Diagnostico, MedicamentosPrescritos, TratamientosRecomendados, NotasTratamiento)
             
                // Se manda el put al servidor para poder actualizar datos desde el modal 
                 await UpdatePaciente(idModificar, NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente, AntecedentesMedicosPersonales, AntecedentesMedicosFamiliares, NotasAntecedentesMedicos, MotivoConsulta, PresionArterial, FrecuenciaCardiaca, FrecuenciaRespiratoria, Temperatura, NotasExamenFisico, Diagnostico, MedicamentosPrescritos, TratamientosRecomendados, NotasTratamiento, DatoBase64);

                 // muestra un mensaje
                 Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Información modificada con éxito",
                        showConfirmButton: false,
                        timer: 2000
                      });

                // Crear un nuevo array de pacientes con la información actualizada
                const PacientesModificados = pacientes.map(paciente => paciente.id === idModificar ? { // Verificamos si el paciente es el que estamos modificando
                        ...paciente, // Copiamos todas las propiedades del paciente
                        NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente, AntecedentesMedicosPersonales, AntecedentesMedicosFamiliares, NotasAntecedentesMedicos, MotivoConsulta, PresionArterial, FrecuenciaCardiaca, FrecuenciaRespiratoria, Temperatura, NotasExamenFisico, Diagnostico, MedicamentosPrescritos, TratamientosRecomendados, NotasTratamiento 
                        } : paciente // Si no es el paciente a modificar, lo dejamos igual
                );

                setPacientes(PacientesModificados); // Actualizamos el estado con los pacientes modificados

                // Setea todos los inputs, para que al modificar al paciente, los inputs queden vacios (sin la info que se modifico)
                setNombrePaciente(''); setCedulaPaciente(''); setFechaNacimientoPaciente(''); setSexoPaciente(''); setTelefonoPaciente(''); setConsultaPaciente(''); setNotasPaciente(''); setAntecedentesMedicosPersonales(''); setAntecedentesMedicosFamiliares(''); setNotasAntecedentesMedicos(''); setMotivoConsulta(''); setPresionArterial(''); setFrecuenciaCardiaca(''); setFrecuenciaRespiratoria(''); setTemperatura(''); setNotasExamenFisico(''); setDiagnostico(''); setMedicamentosPrescritos(''); setTratamientosRecomendados(''); setNotasTratamiento(''); setBase64('');

                handleClose(); // Cierra el modal
        }


  return (
  <div>
          <h1>Expediente</h1>

        <div className='divFormularioExpediente'>
              <h5>Datos personales</h5>

              <span className='textoExpediente'>Nombre del paciente</span>
              <input className='inputExpediente' value={NombrePaciente} onChange={e => setNombrePaciente(e.target.value)} type="text" placeholder='Nombre del paciente'/>

              <span className='textoExpediente'>Número de identificación</span>
              <input className='inputExpediente' value={CedulaPaciente} onChange={e => setCedulaPaciente(e.target.value)} type="text" placeholder='Número de identificación'/>

              <span className='textoExpediente'>Fecha de nacimiento</span>
              <input className='inputExpediente' value={FechaNacimientoPaciente} onChange={e => setFechaNacimientoPaciente(e.target.value)} type="date"/>
<br />
              <span className='textoExpediente'>Sexo</span>
                  <select value={SexoPaciente} onChange={e => setSexoPaciente(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                  </select>

              <span className='textoExpediente'>Número de teléfono</span>
              <input className='inputExpediente' value={TelefonoPaciente} onChange={e => setTelefonoPaciente(e.target.value)} type="number" placeholder='Número de teléfono'/>

              <span className='textoExpediente'>Cita</span>
                <select value={ConsultaPaciente} onChange={e => setConsultaPaciente(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="Quiropodia">Quiropodia</option>
                        <option value="Consulta General">Consulta General</option>
                </select>

              <span className='textoExpediente'>Notas:</span>
              <textarea className='textArea' value={NotasPaciente} onChange={e => setNotasPaciente(e.target.value)} name="message" placeholder='Notas'/>
<br />

<hr />
                <h5>Antecedentes médicos</h5>

                <span className='textoExpediente'>Personales</span>
                <textarea className='textArea' value={AntecedentesMedicosPersonales} onChange={e => setAntecedentesMedicosPersonales(e.target.value)} placeholder='Personales'></textarea>

                <span className='textoExpediente'>Familiares</span>
                <textarea className='textArea' value={AntecedentesMedicosFamiliares} onChange={e => setAntecedentesMedicosFamiliares(e.target.value)} placeholder='Familiares'></textarea>

                <span className='textoExpediente'>Notas:</span>
                <textarea className='textArea' value={NotasAntecedentesMedicos} onChange={e => setNotasAntecedentesMedicos(e.target.value)} placeholder='Notas'></textarea>
<hr />
                <h5>Consulta médica</h5>

                <span className='textoExpediente'>Motivos de la consulta</span>
                <textarea className='textArea' value={MotivoConsulta} onChange={e => setMotivoConsulta(e.target.value)} placeholder='Motivo de la consulta'></textarea>
<br />
<br />
                <h6>Signos y Exámen Físico</h6>
<br />
                <span className='textoExpediente'>Presión arterial</span>
                <input className='inputExpediente' value={PresionArterial} onChange={e => setPresionArterial(e.target.value)} type="text" placeholder='Presión arterial'/>

                <span className='textoExpediente'>Frecuencia cardiaca</span>
                <input className='inputExpediente' value={FrecuenciaCardiaca} onChange={e => setFrecuenciaCardiaca(e.target.value)} type="number" placeholder='Frecuencia respiratoria'/>

                <span className='textoExpediente'>Frecuencia respiratoria</span>
                <input className='inputExpediente' value={FrecuenciaRespiratoria} onChange={e => setFrecuenciaRespiratoria(e.target.value)} type="number" placeholder='Frecuencia cardiaca'/>
<br />
                <span className='textoExpediente'>Temperatura</span>
                <input className='inputExpediente' value={Temperatura} onChange={e => setTemperatura(e.target.value)} type="number" placeholder='Temperatura'/>

                <span className='textoExpediente'>Adjuntar exámenes o imágenes</span>
                <input className='inputExpediente' onChange={(e) => inputArchivo(e.target.files)} type="file"/>

                <span className='textoExpediente'>Notas:</span>
                <textarea className='textArea' value={NotasExamenFisico} onChange={e => setNotasExamenFisico(e.target.value)} placeholder='Notas'></textarea>
<hr />
                <h5>Diagnóstico</h5>

                <textarea className='textArea' value={Diagnostico} onChange={e => setDiagnostico(e.target.value)} placeholder='Diagnóstico médico'></textarea>
<hr />
                <h5>Tratamiento</h5>
                <span className='textoExpediente'>Medicamentos prescritos</span>
                <textarea className='textArea' value={MedicamentosPrescritos} onChange={e => setMedicamentosPrescritos(e.target.value)} placeholder='Indicaciones'></textarea>

                <span className='textoExpediente'>Tratamiento recomendados</span>
                <textarea className='textArea'  value={TratamientosRecomendados} onChange={e => setTratamientosRecomendados(e.target.value)} placeholder='Recomendaciones'></textarea>

                <span className='textoExpediente'>Notas:</span>
                <textarea className='textArea'  value={NotasTratamiento} onChange={e => setNotasTratamiento(e.target.value)} placeholder='Notas'></textarea>
<br />
<br />
<br />

              <button className='botonRegistrarPaciente' onClick={botonGuardarPaciente}>Guardar paciente</button>
<br />
<br />
        </div>
              <hr />

              <h4>Pacientes registrados</h4>

                <div>
                        {pacientes.length === 0 ? (
                                <p className='textoNoHayPacientes'>No hay pacientes registrados...</p>
                        ) : (
                                pacientes.map((paciente) => (
                                <p key={paciente.id}>
                                        {paciente.CedulaPaciente} {paciente.NombrePaciente} 
                                        <Button className='botonModificaPaciente' variant="primary" onClick={e => cargarPac(paciente.id)}>Editar</Button> 
                                        <button className='botonEliminarPaciente' onClick={e => botonEliminarPaciente(paciente.id)}>Eliminar</button>
                                </p>
                                ))
                        )}
                </div>

        <div>

      {/* Modal */}
      <Modal show={show} onHide={handleClose}>
          <Modal.Header closeButton>
                <Modal.Title>Modificar datos</Modal.Title>
          </Modal.Header>

          <Modal.Body>
              <div>

              <h5>Datos personales</h5>
              <span className='textoExpediente'>Nombre del paciente</span>
              <input className='inputExpediente' value={NombrePaciente}  onChange={e => setNombrePaciente(e.target.value)} type="text" placeholder='Nombre del paciente'/>
<br />
              <span className='textoExpediente'>Número de identificación</span>
              <input className='inputExpediente' value={CedulaPaciente} onChange={e => setCedulaPaciente(e.target.value)} type="text" placeholder='Número de identificación'/>
<br />
              <span className='textoExpediente'>Fecha de nacimiento</span>
              <input  className='inputExpediente'value={FechaNacimientoPaciente} onChange={e => setFechaNacimientoPaciente(e.target.value)} type="date"/>
<br />
              <span className='textoExpediente'>Sexo</span>
                  <select className='inputExpediente'  value={SexoPaciente} onChange={e => setSexoPaciente(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="Masculino">Masculino</option>
                        <option value="Femenino">Femenino</option>
                  </select>
<br />
              <span className='textoExpediente'>Número de teléfono</span>
              <input className='inputExpediente' value={TelefonoPaciente} onChange={e => setTelefonoPaciente(e.target.value)} type="number" placeholder='Número de teléfono'/>
<br />
              <span className='textoExpediente'>Cita</span>
                <select className='inputExpediente'  value={ConsultaPaciente} onChange={e => setConsultaPaciente(e.target.value)}>
                        <option value="">Seleccionar</option>
                        <option value="Quiropodia">Quiropodia</option>
                        <option value="Consulta General">Consulta General</option>
                </select>
<br />
              <span className='textoExpediente'>Notas:</span>
              <textarea className='textArea' value={NotasPaciente} onChange={e => setNotasPaciente(e.target.value)} name="message" placeholder='Notas'/>
<br />
<br />
              <h5>Antecedentes médicos</h5>
<br />
                <span className='textoExpediente'>Personales</span>
                <textarea className='textArea' value={AntecedentesMedicosPersonales} onChange={e => setAntecedentesMedicosPersonales(e.target.value)} placeholder='Antecedentes médicos personales'></textarea>
<br />
                <span className='textoExpediente'>Familiares</span>
                <textarea className='textArea' value={AntecedentesMedicosFamiliares} onChange={e => setAntecedentesMedicosFamiliares(e.target.value)} placeholder='Antecedentes médicos familiares'></textarea>
<br />
                <span className='textoExpediente'>Notas:</span>
                <textarea className='textArea' value={NotasAntecedentesMedicos} onChange={e => setNotasAntecedentesMedicos(e.target.value)} placeholder='Notas:'></textarea>
<br />
<br />
                <h5>Consulta médica</h5>

                <span className='textoExpediente'>Motivos de la consulta</span>
                <textarea className='textArea' value={MotivoConsulta} onChange={e => setMotivoConsulta(e.target.value)} placeholder='Motivos de la consulta'></textarea>
<br /><br />
                <h6>Signos y Exámen Físico</h6>

                <span className='textoExpediente'>Presión arterial</span>
                <input className='inputExpediente' value={PresionArterial} onChange={e => setPresionArterial(e.target.value)} type="text" placeholder='Presión arterial'/>
<br />
                <span className='textoExpediente'>Frecuencia cardiaca</span>
                <input className='inputExpediente' value={FrecuenciaCardiaca} onChange={e => setFrecuenciaCardiaca(e.target.value)} type="number" placeholder='Frecuencia respiratoria'/>
<br />
                <span className='textoExpediente'>Frecuencia respiratoria</span>
                <input className='inputExpediente' value={FrecuenciaRespiratoria} onChange={e => setFrecuenciaRespiratoria(e.target.value)} type="number" placeholder='Frecuencia cardiaca'/>
<br />
                <span className='textoExpediente'>Temperatura</span>
                <input className='inputExpediente' value={Temperatura} onChange={e => setTemperatura(e.target.value)} type="number" placeholder='Temperatura'/>
<br />
                <span className='textoExpediente'>Adjuntar exámenes o imágenes</span>
                {  DatoBase64 ? (  <p className='textMostrar'>Ya hay un archivo registrado</p>  ) : null  } {/* muestra un msj en caso que ya tenga un archivo adjunto */}
                <input className='inputExpediente' onChange={(e) => inputArchivo(e.target.files)} type="file"/>
<br />
                <span className='textoExpediente'>Notas:</span>
                <textarea className='textArea' value={NotasExamenFisico} onChange={e => setNotasExamenFisico(e.target.value)} placeholder='Notas'></textarea>
<br />
<br />
                <h5>Diagnóstico</h5>
<br />
                <textarea className='textArea' value={Diagnostico} onChange={e => setDiagnostico(e.target.value)} placeholder='Diagnóstico médico'></textarea>
<br />
<br />
                <h5>Tratamiento</h5>
                <span className='textoExpediente'>Medicamentos prescritos</span>
                <textarea className='textArea' value={MedicamentosPrescritos} onChange={e => setMedicamentosPrescritos(e.target.value)} placeholder='Medicamentos recetados (dosis y frecuencia)'></textarea>
<br />
                <span className='textoExpediente'>Tratamiento recomendados</span>
                <textarea className='textArea' value={TratamientosRecomendados} onChange={e => setTratamientosRecomendados(e.target.value)} placeholder='Tratamiento recomendados / sugeridos'></textarea>
<br />
                <span className='textoExpediente'>Notas:</span>
                <textarea className='textArea' value={NotasTratamiento} onChange={e => setNotasTratamiento(e.target.value)} placeholder='Notas'></textarea>

              </div>
          </Modal.Body>

          <Modal.Footer>
                <Button className='botonCerrarModal' variant="secondary" onClick={handleClose}>Cerrar</Button>
                <Button className='botonAplicarModificacionModal' variant="primary" onClick={botonModificarInfo} >Guardar</Button>
          </Modal.Footer>

      </Modal>
        </div>

</div>
  )
}

export default ExpedienteMedico