import React, {useId} from 'react'

export const UseIdComponent = () => {
    const id = useId(); // Permite crear in identificador unico en toda la aplicacion 

  return (
    <div>
        <h1>useID Hook</h1>
        <input id={id} name="nombre" placeholder='Nombre' />

    </div>
  )
}
