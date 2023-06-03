import React from 'react'
import { useMayuscula } from '../hooks/useMayuscula'

export const CustomHooksComponent = () => {
    // la ventaja es tener separada la funcionalidad del renderizado del componente
    const {estado, mayusculas, minusculas, concatenar} = useMayuscula('TobIAs mALaqUiaS');
   

  return (
    <div>
        <h1>Probando custom hooks</h1>
        {estado}
        <br/>
        <button onClick={mayusculas}>Cambiar a Mayusculas</button>
        <button onClick={minusculas}>Cambiar a Minusculas</button>
        <button onClick={e => concatenar('Fifiolo')}>Concatenar</button>
    </div>
  )
}
