import React, { useEffect } from 'react';
//import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs'
import GifGridItem from './GifGridItem';



export const GifGrid = ({ category }) => {
    const { loading, data: imagenes } = useFetchGifs(category);

    useEffect(() => {

    }, [category]);

    return (
        <div className="row">
            {
                loading
                &&
                <div className="col animate__animated animate__repeat-2 animate__flash">
                    <h6 className="h6 font-weight-lighter text-muted">Loading Content Please Wait...</h6>
                </div>
            }
            {imagenes.map((img) => {
                return (<GifGridItem {...img} />)
            })}
        </div>
    )
}
