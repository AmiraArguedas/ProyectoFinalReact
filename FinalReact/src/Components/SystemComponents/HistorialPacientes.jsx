import React from 'react';
import { useEffect, useState } from 'react';
import obtenerHistorialPacientes from '../../Services/getHistorial';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../../Styles/HistorialPacientes.css";

function HistorialPacientes() {

    // input para buscar (tipo search)
    const [Buscador, setBuscador] = useState(''); // se inicializa "Buscador" como vacio (el input está vacio) y "setBuscador" es la funcion para poder actualizar a "Buscador"
    
    //lista para guardar historial
    const [HistorialPacientes, setHistorialPacientes] = useState([]); //"setHistorialPacientes" es la función que se usará para actualizar el valor de "HistorialPacientes" que se inicia como una lista vacia 
    

    useEffect(() => { // mantiene el control, evita que se renderice de manera descontrolada
        const fetchUsers = async () => { // funcion asincrona para la obtencion de datos, se consulta al servidor
          const infoHistorial = await obtenerHistorialPacientes(); // obtiene los datos que estan registrados en el servidor 
         
          setHistorialPacientes(infoHistorial); // se fijan los valores que se obtienen con infoHistorial, ahora los establecemos en setHistorialPacientes (HistorialPacientes)
     
        };
        fetchUsers(); 
      }, []); 
    
        // Filtrar pacientes en base al término de búsqueda
      const filteredPacientes = HistorialPacientes.filter((paciente) => paciente.NombrePaciente.toLowerCase().includes(Buscador.toLowerCase())
        ); 

    // "HistorialPacientes" es una lista que contiene a los pacientes
    // con toLowerCase() y toLower convierte el nombre del paciente (ya registrado) a minúscula
    // "Buscador.toLowerCase()" convierte el texto del buscador a minúsculas, para que sea compatible y se encuentre 
    // includes() verifica si el nombre del paciente contiene el texto que se está buscando en Buscador. Si es así, el paciente será incluido en el nuevo array "filteredPacientes"

  return (
    <div className='divHistorial'>

    <div className="container mt-5">
    <h1 className="mb-4">Historial de Pacientes</h1>

    <input className='inputBuscador' value={Buscador} onChange={(e) => setBuscador(e.target.value)} placeholder="Busca por nombre..." type="search" />
    <br />
    <br />

    {filteredPacientes.length > 0 ? (
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Cédula</th>
              <th>Nombre</th>
              <th>Fecha de Nacimiento</th>
              <th>Sexo</th>
              <th>Teléfono</th>
              <th>Consulta</th>
              <th>Notas</th>
              <th>Antecedentes Médicos Personales</th>
              <th>Antecedentes Médicos Familiares</th>
              <th>Notas Antecedentes Médicos</th>
              <th>Motivo de Consulta</th>
              <th>Presión Arterial</th>
              <th>Frecuencia Cardíaca</th>
              <th>Frecuencia Respiratoria</th>
              <th>Temperatura</th>
              <th>Notas Examen Físico</th>
              <th>Diagnóstico</th>
              <th>Medicamentos Prescritos</th>
              <th>Tratamientos Recomendados</th>
              <th>Notas Tratamiento</th>
            </tr>
          </thead>
          <tbody>
            {filteredPacientes.map((paciente) => (
              <tr key={paciente.id}>
                <td>{paciente.CedulaPaciente}</td>
                <td>{paciente.NombrePaciente} </td>
                <td>{paciente.FechaNacimientoPaciente}</td>
                <td>{paciente.SexoPaciente}</td>
                <td>{paciente.TelefonoPaciente}</td>
                <td>{paciente.ConsultaPaciente}</td>
                <td>{paciente.NotasPaciente}</td>
                <td>{paciente.AntecedentesMedicosPersonales}</td>
                <td>{paciente.AntecedentesMedicosFamiliares}</td>
                <td>{paciente.NotasAntecedentesMedicos}</td>
                <td>{paciente.MotivoConsulta}</td>
                <td>{paciente.PresionArterial}</td>
                <td>{paciente.FrecuenciaCardiaca}</td>
                <td>{paciente.FrecuenciaRespiratoria}</td>
                <td>{paciente.Temperatura}</td>
                <td>{paciente.NotasExamenFisico}</td>
                <td>{paciente.Diagnostico}</td>
                <td>{paciente.MedicamentosPrescritos}</td>
                <td>{paciente.TratamientosRecomendados}</td>
                <td>{paciente.NotasTratamiento}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No se encontraron resultados.</p>
      )}
    </div>

  </div>
    );
}


export default HistorialPacientes