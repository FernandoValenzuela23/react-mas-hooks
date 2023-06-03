import {useState} from 'react'

export const useMayuscula = (texto) => {
    const [text, setText] = useState(texto)

    const mayusculas = () => {
        setText(String(texto).toUpperCase());
    }

    const minusculas = () => {
        setText(String(texto).toLowerCase());
    }

    const concatenar = (texto2) => {
        setText(`${texto} ${texto2}`);
    }
    
    return {
        estado: text, // aqui se tiene el estado actual
        mayusculas,
        minusculas,
        concatenar
    }
} 