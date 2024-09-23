import React from 'react';
import { useEffect, useState } from 'react';
import obtenerUsuarios from "../../Services/getUsers";
import PostUsuarios from "../../Services/postUsers";
import "../../Styles/Register.css";
import Swal from 'sweetalert2';
import { DeleteUsuario } from '../../Services/deleteUsers';

function Registro() {

    const [username, setUsername] = useState(''); // contiene los datos que se ingresan al input de "username"
    const [password, setPassword] = useState(''); // contiene los datos que se ingresan al input de "password"
  
    const [users, setUsers] = useState([]); // contiene la información de los usuarios registrados
  
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
      
      const botonRegistrar = async () =>{

          if (username.trim() === "" || password.trim() === "") {

            // muestra mensaje
            Swal.fire("No se permiten campos vacíos");

            return; // vuelve al inicio de la funcion, si hay campos vacios para el evento del boton
        }

        for (let index = 0; index < users.length; index++) { // for para que recorra la lista de usuarios y
          if (users[index].username == username) { // verifique si el "username" y la "password" que se estan ingresando concuerdan con los datos en el servidor
              
            // muestra mensaje
            Swal.fire({
                  icon: "error",
                  title: "Oops...",
                  text: "El usuario ya existe!",
              });
              return; // Salir de la función si el usuario ya existe, si concordó termina el recorrido (mensaje de error)
          }
      }
  
      // Si pasamos las validaciones, procedemos a registrar el usuario

      //"setUsers" que es un array que contiene la lista de usuarios existentes
      // [...] se usa para crear un nuevo array (incluye todos los elementos del array users existente más el nuevo usuario (nuevoUsuario) que se acaba de crear)
     const nuevoUsuario = await PostUsuarios(username, password)
      setUsers([...users, nuevoUsuario])
      
       // Setea los inputs para que queden vacios (sin la info con la que se registro)
      setUsername('');
      setPassword('');

      // muestra mensaje de "registro exitoso"
      Swal.fire({
          position: "center",
          icon: "success",
          title: "Usuario registrado",
          showConfirmButton: false,
          timer: 1500
      });
    }    

   const botonEliminarUsuario = async (IdUsuario) => {

        // DeleteUsuario es función que retorne una promesa, asegura que SOLO después de que el usuario sea eliminado del servidor, se proceda a actualizar la lista local
        await DeleteUsuario(IdUsuario);

         // Usamos filter para crear una nueva lista de usuarios que excluye el paciente que acaba de ser eliminado
        setUsers(ElimineAutomaticamenteUsuarios => ElimineAutomaticamenteUsuarios.filter(user => user.id !== IdUsuario));
   }


  return (
<div>
  <br />
    <div className='divTotalRegistro'>

        <div className='divRegister'>
              <br />
              <p className='h1Registro'>Registro de nuevos usuarios</p>
              <br />
              <span>Nombre de usuario</span>
              <br />
              <input className='inputRegister' value={username} onChange={cargaUsername} type="text"/>
              <br />
              <br />
              <span>Contraseña</span>
              <br />
              <input className='inputRegister'value={password} onChange={cargaPassword} type="password"/>
              <br />
              <br />
              <button className='botonRegister' onClick={botonRegistrar}>Registrar usuario</button>
              <br />
              <br />
        </div>

        <div className='divTextoRegistro'>
              <p className='textoP_Registro'>Agrega nuevos administradores, para que estén autorizados y puedan ingresar al sistema</p>
              <p className='textoP_Registro2'>Elimina usuarios previamente registrados:</p>

             {users.map((usuarioRegistrado) => (
                <p key={usuarioRegistrado.id}> {usuarioRegistrado.username} 
                <button className='botonEliminarUsuarios' onClick={e => botonEliminarUsuario(usuarioRegistrado.id)}>Eliminar usuario</button></p>
             ))}

        </div>

    </div>
</div>
  )
}

export default Registro