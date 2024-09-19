import React from 'react'
import { useEffect, useState } from 'react';
import obtenerUsuarios from "../../Services/getUsers"
import PostUsuarios from "../../Services/postUsers"
import "../../Styles/Register.css"

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
      <br />
      <br />
        <div className='divRegister'>
            <br />
            <h1>Registro</h1>
            <br />
            <span>Nombre de usuario</span>
            <br />
            <input className='inputRegister' value={username} onChange={cargaUsername} type="text"/>
            <br />
            <br />
            <span>Contraseña</span>
            <br />
            <input className='inputRegister'value={password} onChange={cargaPassword} type="text"/>
            <br />
            <br />
            <button className='botonRegister' onClick={botonRegistrar}>Registrar usuario</button>
            <br />
            <br />
        </div>
    </div>
  )
}

export default Registro