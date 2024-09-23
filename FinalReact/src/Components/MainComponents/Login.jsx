import React from 'react';
import "../../Styles/Login.css";
import { useEffect, useState } from 'react';
import obtenerUsuarios from "../../Services/getUsers";
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';

function Login() {

  const [username, setUsername] = useState(''); // contiene los datos que se ingresan al input de "username"
  const [password, setPassword] = useState(''); // contiene los datos que se ingresan al input de "password"

  const [users, setUsers] = useState([]); // contiene la información de los usuarios registrados

  const navigate = useNavigate() 

  useEffect(() => { // mantiene el control, evita que se renderice de manera descontrolada
    const fetchUsers = async () => { // funcion asincrona para la obtencion de datos, se consulta al servidor
      const data = await obtenerUsuarios(); // obtiene los datos que estan registrados en el servidor 
     
      setUsers(data); // se fijan los valores que se obtienen con data, ahora los establecemos en setUsers (users)
 
    };
    fetchUsers(); 
  }, []); 

    function cargaUsername(event) { // funcion que captura, mantiene y da un evento a los datos que se ingresan al input de "username" 
      setUsername(event.target.value); 
    }

    function cargaPassword(event) { // funcion que captura, mantiene y da un evento a los datos que se ingresan al input de "password" 
      setPassword(event.target.value); 
    }

    const botonIniciarSesion = () => {
     for (let index = 0; index < users.length; index++) { // for para que recorra la lista de usuarios y
        if (users[index].username === username && users[index].password === password) { // verifique si el "username" y la "password" que se estan ingresando concuerdan con los datos en el servidor
          localStorage.setItem("Autenticado", "true") // guardar en lcoalStorage y da "autenticacion" para entrar a rutas protegidas

          navigate("/Expediente") // primera pagina a ver por "defecto" es "Expediente"

          // muestra mensaje de Inicio de Sesion exitosa
          Swal.fire({
            position: "center",
            icon: "success",
            title: "Iniciaste sesión",
            showConfirmButton: false,
            timer: 1500
          });

          return; // y vuelve al inicio de la funcion, si concordó termina el recorrido (solo da acceso y ya)

        }else{

          // muestra mensaje de que no se encontró el usuario, no concuerda
          Swal.fire({
            icon: "error",
            title: "Error",
            text: "Usuario no registrado!",
          });
          
        } // cierre del else
      } // cierre del for
    } // cierre del boton de iniciar sesión

  return (
    <div>

<br />
      <div  className='divLogin'>
<br />
        <h3 className='tituloLogin'>Inicio de Sesión</h3>
        <br />
        <span>Nombre de Usuario</span>
        <br />
        <input className='inputLogin' value={username} onChange={cargaUsername} type="text"/>
        <br />
        <br />
        <span>Contraseña</span>
        <br />
        <input className='inputLogin' value={password} onChange={cargaPassword} type="password"/>
        <br />
        <br />
        <button className='botonLogin' onClick={botonIniciarSesion}>Ingresar</button>
        <br />
        <br />
        <br />
    </div>
    </div>
  )
}

export default Login