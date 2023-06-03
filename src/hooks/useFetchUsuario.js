import {useState, useEffect} from 'react';

export const useFetchUsuario = (url) => {
    const [usuario, setUsuario] = useState({});
    const [loading, setLoading] = useState(false);

    const cargarUsuario = async() => {       
        setLoading(true);
        const req = await fetch(url);
        const {data} = await req.json();
        setUsuario(data);
        setLoading(false);
    }

    useEffect(() => {
        cargarUsuario();
    }, [url])

    return {
        usuario,
        loading
    };

}