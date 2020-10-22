import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        console.log(`Prueba de useFetchGifs`);
        getGifs(category).then(resp => {
            console.log(resp);
            setState({
                data: resp,
                loading: false,
            });
        })
    }, [category]);

    return state;
};
