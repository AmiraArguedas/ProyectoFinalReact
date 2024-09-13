async function obtenerUsuarios() {
    try {
       const response = await fetch ('http://localhost:3003/usuarios')
       const data = await response.json();
        return data

    } catch (error) {
            console.log(error);
        
    }
}


export default obtenerUsuarios
