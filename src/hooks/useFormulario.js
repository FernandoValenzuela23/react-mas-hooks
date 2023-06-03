import {useState} from 'react'

export const useFormulario = (ini = {}) => {

    const [curso, setCurso] = useState(ini);

    const serializarFormulario = (form) => {
        const formData = new FormData(form);
        const data = {};
        for (let [name, value] of formData) {
            data[name] = value;
        }
        return data;
    }

    const modificarCurso = ({ target }) => {
        const { name, value } = target;
        setCurso({ ...curso, [name]: value }); // esto agrega o cambia la propiedad modificada
    }

    const guardarCurso = e => {
        e.preventDefault();

        const curso = serializarFormulario(e.target);
        setCurso(curso);
    }

    return {
        curso,
        modificarCurso,
        guardarCurso
    }

}