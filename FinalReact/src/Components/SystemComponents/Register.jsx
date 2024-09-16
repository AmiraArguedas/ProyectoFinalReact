import React from 'react'
import { useEffect, useState } from 'react';
import obtenerUsuarios from "../../Services/getUsers"
import PostUsuarios from "../../Services/postUsers"

function Registro() {

    const [username, setUsername] = useState(''); // useState guarda el email del usuario
    const [password, setPassword] = useState(''); // useState para guardar la password
  
    const [users, setUsers] = useState([]); //
  
  
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
      
      const botonRegistrar = () =>{
        for (let index = 0; index < users.length; index++) {
            if (users[index].username === username) {
              console.log("Usuario ya existente");
            }else{
              if (username.trim() === "" || password.trim() === "") {
                console.log("No se permiten espacios vacios");
              }else{
                console.log("Registro exitoso");
                PostUsuarios(username, password)
              }
            }    
        }
      }

  return (
    <div>
        <h1>Registro</h1>

      <span>Nombre de usuario</span>
      <input value={username} onChange={cargaUsername} type="text"/>
      <span>Contraseña</span>
      <input value={password} onChange={cargaPassword} type="text"/>
      <button onClick={botonRegistrar}>Registrar usuario</button>


    </div>
  )
}

export default Registro