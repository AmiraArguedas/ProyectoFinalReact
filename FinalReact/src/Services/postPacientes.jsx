async function PostPacientes(NombrePaciente, CedulaPaciente, FechaNacimientoPaciente, SexoPaciente, TelefonoPaciente, ConsultaPaciente, NotasPaciente, AntecedentesMedicosPersonales, AntecedentesMedicosFamiliares, NotasAntecedentesMedicos, MotivoConsulta, PresionArterial, FrecuenciaCardiaca, FrecuenciaRespiratoria, Temperatura, NotasExamenFisico, Diagnostico, MedicamentosPrescritos, TratamientosRecomendados, NotasTratamiento, DatoBase64) {
    const userData={
        NombrePaciente, 
        CedulaPaciente,
        FechaNacimientoPaciente,
        SexoPaciente,
        TelefonoPaciente, 
        ConsultaPaciente,
        NotasPaciente,
        AntecedentesMedicosPersonales,
        AntecedentesMedicosFamiliares,
        NotasAntecedentesMedicos,
        MotivoConsulta,
        PresionArterial,
        FrecuenciaCardiaca,
        FrecuenciaRespiratoria,
        Temperatura,
        NotasExamenFisico,
        Diagnostico,
        MedicamentosPrescritos,
        TratamientosRecomendados,
        NotasTratamiento, 
        DatoBase64
    }
    try {
        // Realiza una solicitud POST a la URL especificada
        const response = await fetch('http://localhost:3003/pacientes', {
            method: 'POST', // Especifica que se está utilizando el método POST
            headers: {
                'Content-Type': 'application/json' // Indica que los datos se envían en formato JSON. en este apartado tambien se pueden enviar tokens
            },
            body: JSON.stringify(userData) // Convierte el objeto newUser a JSON para enviarlo en el cuer
        });

        // Espera la respuesta en formato JSON
        const data = await response.json();
        // Retorna los datos obtenidos de la respuesta del servidor
        return data; /// siempre hay que ponerlo 
    } catch (error) {
        // Captura y muestra cualquier error que ocurra durante la solicitud
        console.error(error);
    }
}
export default PostPacientes;
