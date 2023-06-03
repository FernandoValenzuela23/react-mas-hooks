import React, { useState } from 'react'
import { useFormulario } from '../hooks/useFormulario'

export const FormComponent = () => {
    const {curso, guardarCurso, modificarCurso} = useFormulario({})


    return (
        <div>
            <h1>Formulario</h1>
            <p>Curso guardado:</p>
            <pre>{JSON.stringify(curso)}</pre>
            <form onSubmit={guardarCurso}>
                <input type="text" name='nombre' placeholder="Nombre" onChange={modificarCurso} /><br />
                <input type="number" name='anio' placeholder="Año publicacion" onChange={modificarCurso} /><br />
                <textarea name="descripcion" placeholder="Descripcion" onChange={modificarCurso} ></textarea><br />
                <button type="submit">Guardar</button>
            </form>


        </div>
    )
}
