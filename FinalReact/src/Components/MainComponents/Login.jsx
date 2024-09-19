import React from 'react'
import "../../Styles/Login.css"
import { useEffect, useState } from 'react';
import obtenerUsuarios from "../../Services/getUsers"
import { useNavigate } from "react-router-dom";

function Login() {

  const [username, setUsername] = useState(''); // useState guarda el email del usuario
  const [password, setPassword] = useState(''); // useState para guardar la password

  const [users, setUsers] = useState([]); //

  const navigate = useNavigate()

  useEffect(() => { //
    const fetchUsers = async () => { //
      const data = await obtenerUsuarios(); //
     
      setUsers(data); //
 
    };
    fetchUsers(); //
  }, []); //

    console.log(users) //


    function cargaUsername(event) { //captura los datos
      setUsername(event.target.value); //
    }

    function cargaPassword(event) { //
      setPassword(event.target.value); //
    }

    

    const botonIniciarSesion = () => {
     for (let index = 0; index < users.length; index++) {
        if (users[index].username === username && users[index].password === password) {
          console.log("Iniciaste sesión");
          navigate("/Admin")
        }else{
          console.log("No estás autorizado");
        }
      }
    }








  return (
    <div>
<hr />
<br />
      <div  className='divLogin'>
<br />
        <h3>Inicio de Sesión</h3>
        <br />
        <span>Nombre de Usuario</span>
        <br />
        <input className='inputLogin' value={username} onChange={cargaUsername} type="text" name="" id="" />
        <br />
        <br />
        <span>Contraseña</span>
        <br />
        <input className='inputLogin' value={password} onChange={cargaPassword} type="password" name="" id="" />
        <br />
        <br />
        <button className='botonLogin' onClick={botonIniciarSesion}>Iniciar Sesión</button>
        <br />
        <br />
        <br />
    </div>
    </div>
  )
}

export default Login