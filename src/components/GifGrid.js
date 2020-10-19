import React, { useEffect } from 'react';
//import { getGifs } from '../helpers/GetGifs';
import { useFetchGifs } from '../hooks/useFetchGifs'



export const GifGrid = ({ category }) => {
    const { loading, data: imagenes } = useFetchGifs(category);

    useEffect(() => {

    }, [category]);

    return (
        <div className="row">
            {
                loading
                &&
                <div className="col">
                    <h6 className="h6 font-weight-lighter text-muted">Loading Content Please Wait...</h6>
                </div>
            }
            {imagenes.map(({ id, type, imagen, title, import_datetime, source }) => {
                return (
                    <div key={id} className="col-3 my-1">
                        <hr className="hr shadow-lg border" />
                        <div className="card text-center">
                            <div className="card-header">
                                T: <span className="font-weight-bolder">{type}</span> - ID: <span className="font-weight-lighter">{id}</span>
                            </div>
                            <div className="card-body">
                                <img src={imagen} alt={title} className="img-fluid" />
                                <h5 className="card-title">{title}</h5>
                                <p className="card-text">Source: <span className="font-weight-lighter text-monospace">{source}</span></p>
                            </div>
                            <div className="card-footer text-muted">
                                {import_datetime}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
