async function DeleteHistorial() {
    try {
        const response = await fetch(`http://localhost:3003/pacientes/${pacientesId}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${pacientesId}`);
        }

        return { message: `User with id ${pacientesId} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { DeleteHistorial };