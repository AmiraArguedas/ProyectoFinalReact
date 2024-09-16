async function obtenerPacientes() {
    try {
       const response = await fetch ('http://localhost:3003/pacientes')
       const data = await response.json();
        return data

    } catch (error) {
            console.log(error);
        
    }
}


export default obtenerPacientes
