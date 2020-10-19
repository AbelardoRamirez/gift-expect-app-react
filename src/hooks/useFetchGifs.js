import { useEffect, useState } from 'react';
import { getGifs } from '../helpers/GetGifs'

export const useFetchGifs = (category) => {

    const [state, setState] = useState({
        data: [],
        loading: true,
    });

    useEffect(() => {
        getGifs(category).then(resp => {
            setTimeout(() => {
                setState({
                    data: resp,
                    loading: false,
                });
            }, 3000);
        })
    }, [category]);

    return state;
};
