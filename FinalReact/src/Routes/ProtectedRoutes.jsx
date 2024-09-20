import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoutes = ({ children }) => {
    
    const UsuarioAutenticado = localStorage.getItem("Autenticado") === "true"; 

    if (!UsuarioAutenticado) {
       
        return <Navigate to="/" />;
    }

    return children;
};

export default ProtectedRoutes;