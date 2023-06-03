import React, {useState} from 'react'
import { useFetchUsuario } from '../hooks/useFetchUsuario';

export const UserApiComponent = () => {
    const [url, setUrl] = useState(`https://reqres.in/api/users/1`)
    const {usuario, loading} = useFetchUsuario(url);
    
    const getUserId = (e) => {        
        setUrl(`https://reqres.in/api/users/${e.target.value}`);
        
        // Ya no se hace nada mas aqui ni recarga de usuario porque el hook
        // esta pendiente de los cambios en url y hace por lo tanto los cambios en usuario dentro de su logica
        // por lo tanto la siguiente linea ya no es necesaria si se usa hooks personalizados: useFetchUsuario
        // combinados con useEffect y useState
        //cargarUsuario(url);
    }
    


  return (
    <div>
        <h1>Usuario</h1>
        <input type="number" id='userId' name='id' placeholder='Id del usuario' onChange={getUserId} />
        <p>Datos del usuario: </p>
        {!loading ? 
            (
                <>
                    <p>Nombre: {usuario?.first_name}</p>
                    <p>Apellido: {usuario?.last_name}</p>                    
                </>
            ) 
            : 
            (<h2 className='loading'>Cargando...</h2>)
        }
        
    </div>
  )
}
