import React from 'react'
import { useEffect, useState } from 'react';
import obtenerHistorialPacientes from '../../Services/getHistorial';
import 'bootstrap/dist/css/bootstrap.min.css';

function HistorialPacientes() {

    const [Buscador, setBuscador] = useState('');
    const [HistorialPacientes, setHistorialPacientes] = useState([]); 
    

    useEffect(() => { // mantiene el control, evita que se renderice de manera descontrolada
        const fetchUsers = async () => { // funcion asincrona para la obtencion de datos, se consulta al servidor
          const infoPaciente = await obtenerHistorialPacientes(); // obtiene los datos que estan registrados en el servidor 
         
          setHistorialPacientes(infoPaciente); // se fijan los valores que se obtienen con infoPacientes, ahora los establecemos en setPacientes (pacientes)
     
        };
        fetchUsers(); // 
      }, []); //
    
        // Filtrar pacientes en base al término de búsqueda
  const filteredPacientes = HistorialPacientes.filter((paciente) => paciente.NombrePaciente.toLowerCase().includes(Buscador.toLowerCase())
    ); 
                console.log(filteredPacientes);
                console.log(Buscador);


  return (
    <div>

    <div className="container mt-5">
    <h1 className="mb-4">Historial de Pacientes</h1>

    <input value={Buscador} onChange={(e) => setBuscador(e.target.value)} placeholder="Busca por nombre..." type="search" />
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
                <td>{paciente.NombrePaciente}</td>
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