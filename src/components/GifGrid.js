import React, { useEffect, useState } from 'react'

export const GifGrid = ({ category }) => {
    const [searchQuery, setSearchQuery] = useState(category)
    const [imagenes, setImagenes] = useState([]);

    useEffect(() => {
        fetch(`https://api.giphy.com/v1/gifs/search?q=${searchQuery}&limit=20&api_key=Us5ddAo4CXQDQjg5xYxz2uFrH73kiYmw`)
            .then(resp => resp.json())
            .then(data => {
                const categoria = data.data.map(img => ({ type: img.type, id: img.id, title: img.title, import_datetime: img.import_datetime, imagen: img.images.original.url, source: img.source }));
                setImagenes([...categoria]);
            })
    }, []);

    return (
        <div className="row">
            {imagenes.map(gif => {
                return (
                    <div key={gif.id} className="col-3 my-1">
                        <hr className="hr shadow-lg border" />
                        <div className="card text-center">
                            <div className="card-header">
                                T: <span className="font-weight-bolder">{gif.type}</span> - ID: <span className="font-weight-lighter">{gif.id}</span>
                            </div>
                            <div className="card-body">
                                <img src={gif.imagen} alt={gif.title} className="img-fluid" />
                                <h5 className="card-title">{gif.title}</h5>
                                <p className="card-text">Source: <span className="font-weight-lighter text-monospace">{gif.source}</span></p>
                            </div>
                            <div className="card-footer text-muted">
                                {gif.import_datetime}
                            </div>
                        </div>
                    </div>
                )
            })}
        </div>
    )
}
