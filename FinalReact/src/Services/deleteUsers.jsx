async function DeleteUsuario(IdUsuario) {
    try {
        const response = await fetch(`http://localhost:3003/usuarios/${IdUsuario}`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json'
            }
        });
        

        if (!response.ok) {
            throw new Error(`Error deleting user with id ${IdUsuario}`);
        }

        return { message: `User with id ${IdUsuario} deleted successfully` };
    } catch (error) {
        console.error('Error deleting user:', error);
        throw error;
    }
}

export { DeleteUsuario };