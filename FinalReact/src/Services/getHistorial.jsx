async function obtenerHistorialPacientes() {
    try {
       const response = await fetch ('http://localhost:3003/historial')
       const data = await response.json();
        return data

    } catch (error) {
            console.log(error);
        
    }
}


export default obtenerHistorialPacientes
